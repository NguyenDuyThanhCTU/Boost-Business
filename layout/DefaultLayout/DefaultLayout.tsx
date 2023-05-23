import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Login from "@components/FrontEnd/Login/Login";
import Hotline from "@components/PopUp/Hotline";
import OnTop from "@components/PopUp/Ontop";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Login /> */}
      <Header />
      <main>{children}</main>
      <Footer />
      <OnTop />
      <Hotline />
    </>
  );
};

export default Layout;
