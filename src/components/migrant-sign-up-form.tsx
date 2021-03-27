import React from "react";
import { Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import TextArea from "antd/lib/input/TextArea";
import { LanguageSearch } from "./languageSearch";
import { fetcher } from "fetcher";
import { endpoints } from "endpoints";
import { useDispatch, useSelector } from "react-redux";
import { SignInResponse } from "./sign-in-form";
import { selectSignedInStatus, setAuth } from "reducers/auth";
import { Button } from "antd";
import { Redirect } from "react-router";
import { AppPath } from "../constants";

type MigrantSignUpAttempt = {
  name: string;
  about_me: string;
  language_id: number | null;
  interests: string[];
  email_address: string;
  password: string;
};

const initialValues: MigrantSignUpAttempt = {
  name: "",
  about_me: "",
  language_id: null,
  interests: [],
  email_address: "",
  password: "",
};

export const MigrantSignUpForm: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const authState = useSelector(selectSignedInStatus);
  const prefilledLangId = params.get("langId")
    ? parseInt(params.get("langId") as string)
    : null;

  const handleSubmit = (values: MigrantSignUpAttempt) => {
    fetcher
      .post<SignInResponse>(endpoints.sign_up.migrant, values)
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
            <LanguageSearch
              prefilledId={prefilledLangId}
              setId={(val) => setFieldValue("language_id", val)}
            />
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
