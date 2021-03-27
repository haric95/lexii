import React from "react";
import { Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import TextArea from "antd/lib/input/TextArea";
import { LanguageSearch } from "./languageSearch";

type MigrantSignUpAttempt = {
  username: string;
  name: string;
  about_me: string;
  language_id: number | null;
  interests: number[];
  email_address: string;
  password: string;
};

const initialValues: MigrantSignUpAttempt = {
  username: "",
  name: "",
  about_me: "",
  language_id: null,
  interests: [],
  email_address: "",
  password: "",
};

export const MigrantSignUpForm: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const handleSubmit = () => {};

  const prefilledLangId = params.get("langId")
    ? parseInt(params.get("langId") as string)
    : null;

  return (
    <div className="SignUpForm">
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ setFieldValue }) => (
          <Form className="spaced-form">
            <Input name="username" placeholder="username" />
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
          </Form>
        )}
      </Formik>
    </div>
  );
};
