import React from "react";
import { Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import TextArea from "antd/lib/input/TextArea";
import { LanguageSearch } from "./languageSearch";

type SignInAttempt = {
  email: string;
  password: string;
};

const initialValues: SignInAttempt = {
  email: "",
  password: "",
};

export const SignInForm: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ setFieldValue }) => (
          <Form className="spaced-form">
            <Input name="email" placeholder="email" />
            <Input name="password" placeholder="password" type="password" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
