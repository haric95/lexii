import React from "react";
import { Header, HeaderProps } from "./header";
import { Footer } from "./footer";

type LayoutProps = HeaderProps & { withHero?: boolean };

export const Layout: React.FC<LayoutProps> = ({
  children,
  headerType,
  withHero = false,
}) => {
  return (
    <div className="layout">
      <Header headerType={headerType} />
      <div className={`page-body ${withHero ? "with-hero" : ""}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
