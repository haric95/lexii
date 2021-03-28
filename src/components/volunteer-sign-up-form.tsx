import { Tooltip } from "antd";
import { endpoints } from "endpoints";
import { fetcher } from "fetcher";
import { Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import React, { useMemo, useRef, useState } from "react";
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
  image: string;
};

const initialValues: VolunteerSignUpAttempt = {
  name: "",
  about_me: "",
  language: null,
  interests: [],
  email_address: "",
  calendly_url: "",
  image: "",
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
  const [imageName, setImageName] = useState("");

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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: any
  ) => {
    const image = event.target?.files?.[0];
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // use a regex to remove data url part
        const base64String = (reader.result as string)
          .replace("data:", "")
          .replace(/^.+,/, "");
        setter("image", base64String);
      };
      reader.readAsDataURL(image);
    }
    setImageName(event.currentTarget.value.replace(/.*[\/\\]/, ""));
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
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
              {({ submitForm, setFieldValue, values }) => (
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
                  <Input.TextArea
                    name="about_me"
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
                  ></Input>
                  <a
                    href="https://calendly.com"
                    style={{
                      position: "absolute",
                      transform: "translate(-91px, 41px)",
                      fontSize: "12px",
                      textDecoration: "underline",
                    }}
                    target="_blank"
                  >
                    Link to Calendly
                  </a>
                  <Tooltip title="You'll be contacted by users via Calendly to arrange a chat.">
                    <span
                      className="absolute"
                      style={{ transform: "translate(6px, 8px)" }}
                    >
                      ❓
                    </span>
                  </Tooltip>
                  <div className="flex full-width items-center mb-4">
                    <div className="flex full-width items-center justify-left bg-grey-lighter">
                      <label className=" flex items-center px-2 py-2 text-orange rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-orange">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="">Select an image</span>
                        <input
                          type="file"
                          className="hidden"
                          style={{ display: "none" }}
                          accept="image/png, image/jpg"
                          ref={inputRef}
                          onChange={(event) => {
                            handleFileSelect(event, setFieldValue);
                          }}
                        />
                      </label>
                    </div>
                    <span className="ml-2">{imageName}</span>
                  </div>
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
