import { Button } from "antd";
import { Page } from "components/page";
import { UserPreviewList } from "components/user-preview-list";
import { VolunteerDashboard } from "components/volunteer-dashboard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserType } from "reducers/auth";
import {
  removePartner,
  selectPartner,
  selectSelectedPartnerId,
} from "reducers/misc";

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleCardSelect = (id: number) => {
    dispatch(selectPartner(id));
  };
  const id = useSelector(selectSelectedPartnerId);
  const userType = useSelector(selectUserType);
  return (
    <Page headerType="loggedIn" isPublic={false}>
      {userType === "Migrant" ? (
        id ? (
          <>
            <Button onClick={() => dispatch(removePartner())}>back</Button>
            <h1>Book appointment with user: {id}</h1>
          </>
        ) : (
          <UserPreviewList handleCardSelect={handleCardSelect} />
        )
      ) : (
        <VolunteerDashboard />
      )}
    </Page>
  );
};
