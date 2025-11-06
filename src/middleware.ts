import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default intlMiddleware;

export const config = {
  // Exclude Next internals and any static assets (requests with a file extension)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};


