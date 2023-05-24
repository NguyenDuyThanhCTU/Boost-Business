import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Login from "@components/FrontEnd/Login/Login";
import Hotline from "@components/PopUp/Hotline";
import OnTop from "@components/PopUp/Ontop";
import React, { ReactNode } from "react";
import { useState, useEffect } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isLogin) {
        document.body.style.overflow = "hidden";
      }
    }
  }, [isLogin]);

  return (
    <>
      {isLogin && <Login Login={setIsLogin} />}

      <Header Login={setIsLogin} />
      <main>{children}</main>
      <Footer />
      <OnTop />
      <Hotline />
    </>
  );
};

export default Layout;
