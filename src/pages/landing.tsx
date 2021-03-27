import React from "react";
import { useSelector } from "react-redux";
import { Hero } from "../components/hero";
import { Page } from "../components/page";
import { selectSignedInStatus } from "../reducers/auth";

export const Landing: React.FC = () => {
  const authStatus = useSelector(selectSignedInStatus);

  return (
    <Page isPublic headerType="publicMigrant">
      <Hero>
        <h1 className="primary-color">
          Search for a language exchange partner
        </h1>
      </Hero>
    </Page>
  );
};
