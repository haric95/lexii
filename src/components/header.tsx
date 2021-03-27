import React from "react";
import { Button } from "./button";

export type HeaderProps = {
  headerType: "publicMigrant" | "publicVolunteer" | "loggedIn";
};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header flex ai-center jc-sb">
      <div className="right">
        <h1 className="white no-margin">LExI</h1>
      </div>
      <div className="left">
        <Button inverted>Become a volunteer</Button>
      </div>
    </header>
  );
};
