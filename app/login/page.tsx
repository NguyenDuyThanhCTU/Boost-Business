import React from "react";
import Login from "@components/Login/Login";
import Loading from "@components/Login/Item/Loading";

const LoginPage = () => {
  return (
    <div>
      <div className="d:w-[880px] p:w-[90vw] h-[529px] absolute  bg-white bottom-[25%] p:left-[5%] d:left-[30%] flex font-LexendDeca  rounded-sm ">
        <Login />
      </div>
      <Loading />
    </div>
  );
};

export default LoginPage;
