import React from "react";
import { Page } from "../components/page";
import { SignInForm } from "../components/sign-in-form";

export const SignIn = () => {
  return (
    <Page isPublic headerType={"publicMigrant"}>
      <SignInForm />
    </Page>
  );
};
