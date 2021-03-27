import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppPath } from "../constants";
import { selectSignedInStatus } from "../reducers/auth";

const Private: React.FC = ({ children }) => {
  const authStatus = useSelector(selectSignedInStatus);
  console.log(authStatus);

  if (authStatus === "signed_out") return <Redirect to={AppPath.SIGN_IN} />;

  return <React.Fragment>{children}</React.Fragment>;
};

export default Private;
