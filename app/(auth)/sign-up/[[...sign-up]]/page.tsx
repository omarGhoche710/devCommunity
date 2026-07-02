import { SignUp } from "@clerk/nextjs"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account to access the DevCommunity platform and join the developer community.",
};

export default function SignUpPage () {
  return <SignUp />
}