import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  publicRoutes:['/','/api/webhook/clerk'],
  ignoredRoutes:['/api/webhook/clerk']
};