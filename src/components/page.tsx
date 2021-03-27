import React from "react";
import { HeaderProps } from "./header";
import { Layout } from "./layout";
import Private from "./private";

type PageProps = {
  isPublic?: boolean;
} & HeaderProps;

export const Page: React.FC<PageProps> = ({
  isPublic = true,
  children,
  headerType,
}) => {
  if (isPublic) {
    return <Layout headerType={headerType}>{children}</Layout>;
  }

  return (
    <Private>
      <Layout headerType={headerType}>{children}</Layout>
    </Private>
  );
};
