import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  console.log("Token-----------------: ", token);

  const res = NextResponse.json({ success: true });

  res.cookies.set("tutor", token, {
    httpOnly: true,
    path: "/",
    // maxAge: 60 * 60 * 24 * 30,
    maxAge: 60 * 60 * 24,
    // maxAge: 60,
    // sameSite: "lax",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
