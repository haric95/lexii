import React from "react";
import { Header, HeaderProps } from "./header";
import { Footer } from "./footer";

type LayoutProps = HeaderProps;

export const Layout: React.FC<LayoutProps> = ({ children, headerType }) => {
  return (
    <div className="layout">
      <Header headerType={headerType} />
      <div className="page-body">{children}</div>
      <Footer />
    </div>
  );
};
