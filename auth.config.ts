import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (isLoggedIn) {
          return true; // Allow access to dashboard if logged in
        }
        return false; // Redirect unauthenticated users to the login page
      }

      // If already logged in and trying to access non-dashboard, redirect to dashboard
      if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true; // Allow non-dashboard access for unauthenticated users
    },
  },
  providers: [], // Add your providers here
} satisfies NextAuthConfig;
