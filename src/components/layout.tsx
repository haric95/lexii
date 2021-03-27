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
    <div className="flex flex-col h-screen">
      <Header headerType={headerType} />
      <div className={`flex-grow max-w-12xl mx-auto px-4 sm:px-6`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
