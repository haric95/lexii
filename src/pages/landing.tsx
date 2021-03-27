import React from "react";
import { useSelector } from "react-redux";
import { Page } from "../components/page";
import { selectSignedInStatus } from "../reducers/auth";

export const Landing: React.FC = () => {
  const authStatus = useSelector(selectSignedInStatus);

  return (
    <Page isPublic headerType="publicMigrant">
      <h1>{authStatus}</h1>
    </Page>
  );
};
