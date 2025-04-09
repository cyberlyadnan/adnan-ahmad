// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

const filePath = path.resolve(process.cwd(), "emails.json");

export async function POST(req) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    // Read existing emails
    let data = [];
    try {
      const file = await readFile(filePath, "utf-8");
      data = JSON.parse(file);
    } catch (err) {
      // File might not exist yet, ignore
    }

    // Add new email
    data.push({ email, createdAt: new Date().toISOString() });

    // Write back to file
    await writeFile(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: "Email saved successfully" });
  } catch (err) {
    console.error("Error saving email:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
