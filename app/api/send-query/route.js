import { sendSMTPMail } from "@/lib/email";


export async function POST(req) {
  try {
    const { name, email, message, formType, mobile } = await req.json();

    if (!name || !email || !message || !formType) {
      return new Response("Missing fields", { status: 400 });
    }

    await sendSMTPMail({ name, email, message, formType, mobile });

    return new Response("Email sent successfully", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to send email", { status: 500 });
  }
}
