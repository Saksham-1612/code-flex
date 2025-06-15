import nodemailer from "nodemailer";

export async function sendSMTPMail({ name, email, message, formType, mobile }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const formattedHtml = `
    <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
      <h2 style="margin-bottom: 10px;">📩 ${formType} Submission</h2>

      <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
        <tr>
          <td style="font-weight: bold; padding: 8px; background: #f9f9f9;">Name:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; background: #f9f9f9;">Email:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; background: #f9f9f9;">Form Type:</td>
          <td style="padding: 8px;">${formType}</td>
        </tr>
        <tr>
            <td style="font-weight: bold; padding: 8px; background: #f9f9f9;">Mobile:</td>
            <td style="padding: 8px;">${mobile}</td>
        </tr>
      </table>

      <div style="margin-top: 20px;">
        <h4 style="margin-bottom: 8px;">Message:</h4>
        <div style="padding: 12px; background: #f1f5f9; border-radius: 4px; border: 1px solid #e2e8f0;">
          ${message}
        </div>
      </div>

      <p style="margin-top: 30px; font-size: 12px; color: #888;">This email was generated from a contact form submission.</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"${formType} Form" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_RECIPIENTS?.split(","),
    subject: `New ${formType} Submission from ${name}`,
    html: formattedHtml,
  });
}
