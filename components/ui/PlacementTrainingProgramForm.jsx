"use client";

import { useState } from "react";
import { CustomDialog } from "./custom-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function PlacementProgramForm({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    designation: "",
    institute: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

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
      case "designation":
      case "institute":
        return value.trim().length >= 2 ? "" : "This field is required";
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

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }

    // Clear submit status
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
      designation: "",
      institute: "",
    });
    setErrors({});
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success
      console.log("Form Data:", formData);
      setSubmitStatus("success");

      // Reset form and close dialog after success
      setTimeout(() => {
        resetForm();
        onOpenChange(false);
      }, 2000);
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
      placeholder: "Enter your email address",
    },
    {
      id: "mobile",
      label: "Mobile Number",
      type: "tel",
      placeholder: "Enter your mobile number",
    },
    {
      id: "designation",
      label: "Designation",
      type: "text",
      placeholder: "Enter your designation",
    },
    {
      id: "institute",
      label: "Institute",
      type: "text",
      placeholder: "Enter your institute name",
    },
  ];

  return (
    <CustomDialog
      open={open}
      onOpenChange={handleDialogClose}
      title="Contact Us"
      description="Please fill out the form below to get in touch with our placement team."
    >
      <div className="w-full max-w-8xl mx-auto">
        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 border border-green-200 bg-green-50 rounded-lg">
            <div className="flex items-center text-green-800">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              Your form has been submitted successfully! We'll get back to you
              soon.
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 border border-red-200 bg-red-50 rounded-lg">
            <div className="flex items-center text-red-800">
              <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
              There was an error submitting your form. Please try again.
            </div>
          </div>
        )}

        <div className="space-y-6">
          {/* Grid of fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {formFields.map(({ id, label, type, placeholder }) => (
              <div key={id} className="space-y-2">
                <Label htmlFor={id} className="text-xs ">
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
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500 "
                      : "focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  disabled={isSubmitting}
                  required
                  aria-invalid={errors[id] ? "true" : "false"}
                  aria-describedby={errors[id] ? `${id}-error` : undefined}
                />
                {errors[id] && (
                  <p
                    id={`${id}-error`}
                    className="text-xs text-red-600 flex items-center gap-1"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {errors[id]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Note below form */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800 text-center">
              <span className="text-red-500">*</span> This form is exclusively
              for the{" "}
              <span className="font-semibold">
                Training & Placement Department
              </span>{" "}
              and <span className="font-semibold">Faculty Members</span> of the
              college.
            </p>
          </div>

          {/* Buttons */}
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
              disabled={
                isSubmitting || Object.keys(errors).some((key) => errors[key])
              }
              className="px-8 min-w-[120px]"
              onClick={handleSubmit}
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
