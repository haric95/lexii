import React from "react";
import { Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
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
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline"></span>
            <span className="block text-orange-600 xl:inline">Sign in</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Make a big difference to your community. Build the english skills of those who share your mother tongue
          </p>
          <div className="mt-5 max-w-md flex-col mx-auto sm:flex sm:justify-center md:mt-8">
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
              {({ setFieldValue, submitForm }) => (
                <Form className="spaced-form">
                  <Input
                    name="email"
                    placeholder="email"
                    size="large"
                    className="mb-4"
                  />
                  <Input
                    name="password"
                    placeholder="password"
                    type="password"
                    size="large"
                    className="mb-4"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    onClick={submitForm}
                  >
                    Sign in
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>
    </div>
  );
};
