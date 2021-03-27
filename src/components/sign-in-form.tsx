import React from "react";
import { Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import TextArea from "antd/lib/input/TextArea";
import { LanguageSearch } from "./languageSearch";
import { Button } from "antd";
import { fetcher } from "fetcher";
import { endpoints } from "endpoints";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedInStatus, setAuth } from "reducers/auth";
import { Redirect } from "react-router";
import { AppPath } from "../constants";

type SignInAttempt = {
  email: string;
  password: string;
};

const initialValues: SignInAttempt = {
  email: "",
  password: "",
};

export type SignInResponse = {
  user_id: number;
  user_type: "Migrant" | "Volunteer";
};

export const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values: SignInAttempt) => {
    fetcher.post<SignInResponse>(endpoints.sign_in, values).then((response) => {
      window.localStorage.setItem("userId", String(response.data.user_id));
      return dispatch(
        setAuth({
          userId: response.data.user_id,
          signedInStatus: "signed_in",
          userType: response.data.user_type,
        })
      );
    });
  };

  const authState = useSelector(selectSignedInStatus);

  if (authState === "signed_in") {
    return <Redirect to={AppPath.HOME} />;
  }

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ setFieldValue, submitForm }) => (
          <Form className="spaced-form">
            <Input name="email" placeholder="email" />
            <Input name="password" placeholder="password" type="password" />
            <Button onClick={submitForm}>Sign-in</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
