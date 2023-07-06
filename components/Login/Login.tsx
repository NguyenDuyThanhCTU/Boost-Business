import React from "react";
import Button from "./Item/Button";

const Login = () => {
  return (
    <div>
      <div className="flex-1  m-5 mt-8 mb-2 flex-col flex items-center justify-center  relative">
        <h3 className="text-colortopdownGray text-[20px] font-medium">
          Người quản trị
        </h3>

        <h2 className="text-colortopdownGray text-[24px] font-semibold">
          Đăng nhập
        </h2>
        <Button />
      </div>
    </div>
  );
};

export default Login;
