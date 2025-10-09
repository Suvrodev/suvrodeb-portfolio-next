import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "./components/utils/Functions/verifyToken";
import myConfig from "./components/utils/configFile/myConfig";

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  console.log("Path Name: ", pathname);
  console.log("Middleware");
  const token = request.cookies.get(myConfig.accessTokenPath as string)?.value;
  // const token = await getCurrentUserToken();
  const user = verifyToken(token as string);
  console.log("Hello Middleware: ", token);
  console.log("User: ", user);

  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Role admin hole admin-dashboard er route e jete parbe
  // if (user.role === "admin") {
  //   if (
  //     pathname === "/admin-dashboard" ||
  //     pathname.startsWith("/admin-dashboard/")
  //   ) {
  //     return NextResponse.next();
  //   } else {
  //     return NextResponse.redirect(new URL("/unauthorized", request.url));
  //   }
  // }

  // ✅ 2. শুধুমাত্র admin allowed এই routes এ
  if (
    pathname.startsWith("/checkadmin") ||
    pathname.startsWith("/admin-dashboard")
  ) {
    if (user.role === "admin") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  // matcher: ["/about", "/registration"],
  // matcher: ["/admin-dashboard/:path*"],
  // matcher: ["/admin-dashboard/:path*"],
  matcher: ["/checkadmin", "/admin-dashboard", "/admin-dashboard/:path*"],
};
