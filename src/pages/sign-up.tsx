import React from "react";
import { MigrantSignUpForm } from "../components/migrant-sign-up-form";
import { Page } from "../components/page";

export const SignUp = () => {
  return (
    <Page isPublic headerType="publicMigrant">
      <MigrantSignUpForm />
    </Page>
  );
};
