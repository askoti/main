import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Forces Vercel to fetch fresh Environment Variables on every request
export const dynamic = "force-dynamic";

export async function POST(req) {
  // Logic wrapped in Donut function as requested
  const Donut = async () => {
    const { identity, email, message } = await req.json();

    // Verification check for Vercel logs to ensure credentials aren't missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Missing EMAIL_USER or EMAIL_PASS in Vercel Environment Variables");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, // Note: Gmail usually overrides this to your EMAIL_USER
      to: process.env.EMAIL_USER, 
      subject: `PROJECT: ${identity.toUpperCase()}`,
      // Raw text backup
      text: `NAME/COMPANY: ${identity}\nEMAIL: ${email}\n\nPROJECT:\n${message}`,
      // Your requested HTML structure
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>NEW PROJECT INQUIRY</h2>
          <p>NAME / COMPANY: ${identity}</p>
          <p>EMAIL: ${email}</p>
          <div style="margin-top: 20px;">
            <p><strong>PROJECT DETAILS:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    return await transporter.sendMail(mailOptions);
  };

  try {
    await Donut();
    return NextResponse.json({ message: "SUCCESS" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { message: "FAILED", error: error.message }, 
      { status: 500 }
    );
  }
}