import React from "react";
import { Page } from "../components/page";
import { VolunteerSignUpForm } from "../components/volunteer-sign-up-form";

export const Volunteer = () => {
  return (
    <Page isPublic headerType="publicVolunteer">
      <VolunteerSignUpForm />
    </Page>
  );
};
