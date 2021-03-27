import React from "react";
import { HeaderProps } from "./header";
import { Layout } from "./layout";
import Private from "./private";

type PageProps = {
  isPublic?: boolean;
  withHero?: boolean;
} & HeaderProps;

export const Page: React.FC<PageProps> = ({
  isPublic = true,
  withHero = false,
  children,
  headerType,
}) => {
  if (isPublic) {
    return (
      <Layout headerType={headerType} withHero={withHero}>
        {children}
      </Layout>
    );
  }

  return (
    <Private>
      <Layout headerType={headerType} withHero={withHero}>
        {children}
      </Layout>
    </Private>
  );
};
