import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Exporta la configuración de NextAuth
export const middleware = NextAuth(authConfig).auth;

// Asegúrate de que exportas la función `middleware`
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
