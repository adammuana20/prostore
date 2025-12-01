import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { auth } = NextAuth(authConfig);

export default function proxy(request: Request) {
  return auth(request as any);
}
