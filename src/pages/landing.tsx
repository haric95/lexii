import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Hero } from "../components/hero";
import { LanguageSearch } from "../components/languageSearch";
import { Page } from "../components/page";
import { selectSignedInStatus } from "../reducers/auth";
import { Row, Col, AutoComplete, Button } from "antd";
import { useHistory } from "react-router";
import { AppPath } from "../constants";

export const Landing: React.FC = () => {
  const authStatus = useSelector(selectSignedInStatus);
  const [selectedLanguageId, setSelectedLanguageId] = useState<number | null>(
    null
  );
  const history = useHistory();

  const handleNavigateToList = () => {
    history.push(`${AppPath.FIND_A_PARTNER}?langId=${selectedLanguageId}`);
  };

  return (
    <Page isPublic headerType="publicMigrant" withHero>
      <Hero>
        <Row>
          <Col span={12}>
            <h1 className="primary-color">
              Search for a language exchange partner
            </h1>
          </Col>
          <Col span={12}>
            <LanguageSearch setId={setSelectedLanguageId} />
          </Col>
          <Col span={12}></Col>
          <Col span={12}>
            <Button
              disabled={setSelectedLanguageId === null}
              onClick={handleNavigateToList}
            >
              Go
            </Button>
          </Col>
        </Row>
      </Hero>
      <div style={{ marginTop: 60 }}></div>
    </Page>
  );
};
