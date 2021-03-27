import { Avatar, Card, Col, Row } from "antd";
import { endpoints } from "endpoints";
import { fetcher } from "fetcher";
import { VolunteerPreview } from "pages/find-a-partner";
import React, { useEffect, useState } from "react";

type UserPreviewListProps = {
  handleCardSelect: (id: number) => void;
};

export const UserPreviewList: React.FC<UserPreviewListProps> = ({
  handleCardSelect,
}) => {
  const [partners, setPartners] = useState<VolunteerPreview[] | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    fetcher
      .get<{ partners: VolunteerPreview[] }>(endpoints.partners, { params })
      .then((response) => setPartners(response.data.partners));
  }, []);

  return (
    <>
      {partners
        ? partners.map((partner) => (
            <Row>
              <Col span={18}>
                <button
                  className="unstyled-button"
                  onClick={() => handleCardSelect(partner.id)}
                >
                  <Card
                    style={{ width: 600, marginTop: 16, cursor: "pointer" }}
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
                </button>
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
    </>
  );
};
