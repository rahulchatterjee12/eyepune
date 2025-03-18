import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export async function POST(req:any) {
  try {
    const { first_name, last_name, email, company_name, help, company_size, info } = await req.json();

    if (!first_name || !last_name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Use env variables
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "rahulchatterjee941@gmail.com",
      subject: "Contact Form Submission",
      html: `
        <h1>Contact Form</h1>
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${company_name}</p>
        <p><strong>Company Size:</strong> ${company_size}</p>
        <p><strong>Help Needed:</strong> ${help}</p>
        <p><strong>Additional Info:</strong> ${info}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email has been sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
