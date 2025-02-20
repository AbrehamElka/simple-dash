import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth/next";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }