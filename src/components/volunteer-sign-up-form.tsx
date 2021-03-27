import React from "react";
import { Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import TextArea from "antd/lib/input/TextArea";
import { LanguageSearch } from "./languageSearch";
import { Redirect } from "react-router-dom";
import { AppPath } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedInStatus, setAuth } from "reducers/auth";
import { Button } from "antd";
import { fetcher } from "fetcher";
import { SignInResponse } from "./sign-in-form";
import { endpoints } from "endpoints";

type VolunteerSignUpAttempt = {
  username: string;
  name: string;
  about_me: string;
  language_id: number | null;
  interests: number[];
  email_address: string;
  password: string;
};

const initialValues: VolunteerSignUpAttempt = {
  username: "",
  name: "",
  about_me: "",
  language_id: null,
  interests: [],
  email_address: "",
  password: "",
};

export const VolunteerSignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectSignedInStatus);

  const handleSubmit = (values: VolunteerSignUpAttempt) => {
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
            <Input name="email" placeholder="email" />
            <Input name="password" placeholder="password" type="password" />
            <Button onClick={submitForm}>Sign-up</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
