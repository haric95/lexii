import React, { useEffect, useState } from "react";
import { Page } from "../components/page";
import { Row, Col, Card, Avatar } from "antd";
import { fetcher } from "../fetcher";
import { useDispatch, useSelector } from "react-redux";
import { endpoints } from "../endpoints";
import { selectSignedInStatus } from "../reducers/auth";
import { selectPartner } from "../reducers/misc";
import { Router, useHistory } from "react-router";
import { AppPath } from "../constants";
import { UserPreviewList } from "components/user-preview-list";

export type VolunteerPreview = {
  id: number;
  name: string;
  about_me: string;
  image: string;
  interests: string[];
};

export const FindAPartner = () => {
  const [partners, setPartners] = useState<VolunteerPreview[] | null>(null);
  const authStatus = useSelector(selectSignedInStatus);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    fetcher
      .get<{ partners: VolunteerPreview[] }>(endpoints.partners, { params })
      .then((response) => setPartners(response.data.partners));
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleCardSelect = (id: number) => {
    dispatch(selectPartner(id));

    if (authStatus === "signed_in") {
      history.push(AppPath.BOOK);
    } else {
      history.push(`${AppPath.SIGN_UP}${window.location.search}`);
    }
  };

  return (
    <Page isPublic headerType="publicMigrant">
      <UserPreviewList handleCardSelect={handleCardSelect} />
    </Page>
  );
};
