import { Page } from "components/page";
import React from "react";

export const User: React.FC = () => {
  return <Page headerType="loggedIn" isPublic={false}></Page>;
};
