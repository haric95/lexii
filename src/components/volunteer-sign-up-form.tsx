import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { endpoints } from "endpoints";
import { fetcher } from "fetcher";
import { Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectSignedInStatus, setAuth } from "reducers/auth";
import { AppPath } from "../constants";
import { SignInResponse } from "./sign-in-form";

type VolunteerSignUpAttempt = {
  name: string;
  about_me: string;
  language_id: number | null;
  interests: string[];
  email_address: string;
  calendly_url: string;
};

const initialValues: VolunteerSignUpAttempt = {
  name: "",
  about_me: "",
  language_id: null,
  interests: [],
  email_address: "",
  calendly_url: "",
};

export const VolunteerSignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectSignedInStatus);

  const handleSubmit = (values: VolunteerSignUpAttempt) => {
    const v = { ...values };
    fetcher
      .post<SignInResponse>(endpoints.sign_up.volunteer, values)
      .then((response) => {
        window.localStorage.setItem("userId", String(response.data.user_id));
        dispatch(
          setAuth({
            userId: response.data.user_id,
            signedInStatus: "signed_in",
            userType: response.data.user_type,
          })
        );
      });
  };

  if (authState === "signed_in") {
    return <Redirect to={AppPath.HOME} />;
  }

  return (
    <div className="SignUpForm">
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ setFieldValue, submitForm }) => (
          <Form className="spaced-form">
            <Input name="name" placeholder="name" />
            <TextArea name="about" placeholder="about" />
            <Select
              name="interests"
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
            >
              interests
            </Select>
            <Input name="email_address" placeholder="email" />
            <Button onClick={submitForm}>Sign-up</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
