"use client";

import { useState } from "react";
import { CustomDialog } from "./custom-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"; // make sure this exists or create one

export function ContactForm({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (id, value) => {
    switch (id) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value)
          ? ""
          : "Please enter a valid email address";
      case "mobile":
        const mobileRegex = /^[+]?[\d\s-()]{10,}$/;
        return mobileRegex.test(value.replace(/\s/g, ""))
          ? ""
          : "Please enter a valid mobile number";
      case "firstName":
      case "lastName":
        return value.trim().length >= 2
          ? ""
          : "Must be at least 2 characters long";
      case "message":
        return value.trim().length >= 10
          ? ""
          : "Message should be at least 10 characters";
      default:
        return value.trim() ? "" : "This field is required";
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    const error = validateField(id, value);
    setErrors((prev) => ({
      ...prev,
      [id]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    });
    setErrors({});
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const res = await fetch("/api/send-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          mobile: formData.mobile,
          formType: "Gernal Contact", 
        }),
      });
  
      if (res.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          resetForm();
          onOpenChange(false);
        }, 2000);
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const handleDialogClose = (open) => {
    if (!open && !isSubmitting) {
      resetForm();
    }
    onOpenChange(open);
  };

  const formFields = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "mobile",
      label: "Mobile Number",
      type: "tel",
      placeholder: "Enter your mobile number",
    },
  ];

  return (
    <CustomDialog
      open={open}
      onOpenChange={handleDialogClose}
      title="Contact Us"
      description="We'd love to hear from you. Fill out the form below and we'll get back to you shortly."
    >
      <div className="w-full max-w-8xl mx-auto">
        {submitStatus === "success" && (
          <div className="mb-6 p-4 border border-green-200 bg-green-50 rounded-lg">
            <div className="flex items-center text-green-800">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              Your message has been sent successfully!
            </div>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-6 p-4 border border-red-200 bg-red-50 rounded-lg">
            <div className="flex items-center text-red-800">
              <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
              Something went wrong. Please try again later.
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map(({ id, label, type, placeholder }) => (
              <div key={id} className="space-y-2">
                <Label htmlFor={id} className="text-xs">
                  {label} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={formData[id]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full transition-colors ${
                    errors[id]
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  disabled={isSubmitting}
                  required
                />
                {errors[id] && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors[id]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs">
              Your Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full transition-colors ${
                errors.message
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "focus:border-blue-500 focus:ring-blue-500"
              }`}
              disabled={isSubmitting}
              required
            />
            {errors.message && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.message}
              </p>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800 text-center">
              <span className="text-red-500">*</span> All fields are required.
              We will respond to your query via email.
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className="px-8"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={
                isSubmitting || Object.values(errors).some((e) => e !== "")
              }
              className="px-8 min-w-[120px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
}
