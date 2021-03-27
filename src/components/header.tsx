import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AppPath } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedInStatus, signOut } from "reducers/auth";

export type HeaderProps = {
  headerType: "publicMigrant" | "publicVolunteer" | "loggedIn";
};

export const Header: React.FC<HeaderProps> = () => {
  const authState = useSelector(selectSignedInStatus);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    window.localStorage.removeItem("userId");
  };
  return (
    <header className="header flex ai-center jc-sb">
      <Link to={AppPath.ROOT}>
        <div className="right" style={{ cursor: "pointer" }}>
          <h1 className="white no-margin">LEXIH</h1>
        </div>
      </Link>
      <div className="left">
        <Link to={AppPath.VOLUNTEER}>
          <Button type="primary" style={{ marginRight: 20 }}>
            Become a volunteer
          </Button>
        </Link>
        {authState === "signed_in" ? (
          <Button type="default" onClick={handleSignOut}>
            Sign out
          </Button>
        ) : (
          <Link to={AppPath.SIGN_IN}>
            <Button type="default">Sign in</Button>
          </Link>
        )}
      </div>
    </header>
  );
};
