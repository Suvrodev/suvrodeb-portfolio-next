import config from "@/components/utils/configFile/myConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  console.log("Token in route: ", token);

  const res = NextResponse.json({ success: true });

  res.cookies.set(`${config.accessTokenPath}`, token, {
    httpOnly: true,
    // maxAge: 60 * 60 * 24 * 30,
    maxAge: 60 * 60 * 24,
    // maxAge: 60,
    // sameSite: "lax",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/", ///sob page e cookies thakbe --- next route e dile ba na dileo pay
  });
  return res;
}
