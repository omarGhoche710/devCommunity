import { SignIn } from "@clerk/nextjs"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account to access the DevCommunity platform.",
};

export default function SignUpPage () {
  return <SignIn />
}