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

type VolunteerPreview = {
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
      history.push(AppPath.SIGN_UP);
    }
  };

  return (
    <Page isPublic headerType="publicMigrant">
      {partners
        ? partners.map((partner) => (
            <Row>
              <Col span={18}>
                <Card
                  style={{ width: 600, marginTop: 16, cursor: "pointer" }}
                  onClick={() => handleCardSelect(partner.id)}
                  className={"hover-move"}
                >
                  <Card.Meta
                    style={{ marginBottom: 20 }}
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={partner.name}
                    description={partner.about_me}
                  />
                  <div className="flex">
                    {partner.interests.map((interest) => (
                      <div
                        style={{
                          marginRight: 10,
                          border: "1px solid #333333",
                          padding: 5,
                          borderRadius: 3,
                        }}
                      >
                        <span>{interest}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>
            </Row>
          ))
        : new Array(5).fill("").map(() => (
            <Row>
              <Col span={18}>
                <Card style={{ width: 300, marginTop: 16 }} loading={true}>
                  <Card.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
            </Row>
          ))}
    </Page>
  );
};
