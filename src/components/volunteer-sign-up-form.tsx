import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { endpoints } from "endpoints";
import { fetcher } from "fetcher";
import { Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectSignedInStatus, setAuth } from "reducers/auth";
import { AppPath } from "../constants";
import { LanguageSearch } from "./languageSearch";
import { SignInResponse } from "./sign-in-form";

type VolunteerSignUpAttempt = {
  name: string;
  about_me: string;
  language: string | null;
  interests: string[];
  email_address: string;
  calendly_url: string;
};

const initialValues: VolunteerSignUpAttempt = {
  name: "",
  about_me: "",
  language: null,
  interests: [],
  email_address: "",
  calendly_url: "",
};

const interests = [
  "Films",
  "Sports",
  "Cooking",
  "Food",
  "Travel",
  "Learning",
  "Music",
  "Art",
  "Technology",
  "Coffee/Tea",
];

export const VolunteerSignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectSignedInStatus);

  const selectOptions = useMemo(() => {
    return interests.map((interest) => ({ value: interest, label: interest }));
  }, []);

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
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              Volunteer
              <br />
            </span>
            <span className="block text-orange-600 xl:inline">
              Support your community
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-5 max-w-md flex-col mx-auto sm:flex sm:justify-center md:mt-8">
            {/* <div className="rounded-md shadow mb-4" style={{ width: "100%" }}>
              <LanguageSearch setLanguage={setSelectedLanguage} />
            </div>
            <button
              type="button"
              className="mb-4 inline-flex justify-center items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleNavigateToList}
            >
              Search
            </button> */}
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
              {({ submitForm, setFieldValue }) => (
                <Form className="spaced-form">
                  <Input
                    name="name"
                    placeholder="name"
                    className="mb-4"
                    size="large"
                  />
                  <LanguageSearch
                    setLanguage={(language) =>
                      setFieldValue("language", language)
                    }
                    size="large"
                    className="text-left mb-4"
                  />
                  <TextArea
                    name="about"
                    placeholder="about"
                    className="mb-4"
                    size="large"
                  />
                  <Select
                    name="interests"
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Interests"
                    defaultValue={["a10", "c12"]}
                    size="large"
                    className="mb-4 text-left"
                    options={[
                      {
                        options: selectOptions,
                      },
                    ]}
                  ></Select>
                  <Input
                    name="email_address"
                    placeholder="email"
                    size="large"
                    className="mb-4"
                  />
                  <Input
                    name="calendly_url"
                    placeholder="Calendly URL"
                    className="mb-4"
                    size="large"
                  />
                  {/* <Button onClick={submitForm}>Sign-up</Button> */}
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    onClick={submitForm}
                  >
                    Sign up
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
