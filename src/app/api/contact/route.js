import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { identity, email, message } = await req.json();

    // 1. Create a transporter (Use Gmail, Outlook, or Resend)
    // If using Gmail, you need an "App Password"
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Setup email data
const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: `PROJECT: ${identity.toUpperCase()}`,
      // Raw text backup
      text: `NAME/COMPANY: ${identity}\nEMAIL: ${email}\n\nPROJECT:\n${message}`,
      // Stripped back HTML
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #111;">
          <h2 style="border-bottom: 2px solid #dc2626; padding-bottom: 10px;">NEW PROJECT INQUIRY</h2>
          <p><strong>NAME / COMPANY:</strong> ${identity}</p>
          <p><strong>EMAIL:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f4f4f4; border-radius: 4px;">
            <p><strong>PROJECT DETAILS:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // 3. Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "SUCCESS" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ message: "FAILED" }, { status: 500 });
  }
}