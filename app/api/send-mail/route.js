import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, service, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #000;">
          <h2 style="text-align: center; border-bottom: 1px solid #000; padding-bottom: 10px;">New Message from Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p style="border-top: 1px solid #000; text-align: center; padding-top: 10px;">Sent via contact form</p>
        </div>
      `;

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: "New Message from Website",
            html: emailHtml,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
}
