import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { useState } from "react";
import ggSignIn from "@config/GoogleAuth/config";
const Login = ({ Login }: any) => {
  const [Email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const { GoogleSignIn1 } = ggSignIn();
  const HandleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    } else {
      console.log(Email);
    }
  };

  const HandleExit = () => {
    Login(false);
  };
  const HandlerClick = () => {
    console.log("click handler");
  };

  return (
    <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute ">
      <div className="w-[880px] h-[529px] absolute bg-white bottom-[25%] left-[30%] flex font-LexendDeca cursor-pointer">
        <div className="flex-1 p-4 mt-8 mb-2 flex-col flex items-center justify-center  ">
          <h3 className="text-colortopdownGray text-[20px] font-medium">
            Người tìm việc
          </h3>
          <h2 className="text-colortopdownGray text-[24px] font-semibold">
            Đăng ký hoặc đăng nhập
          </h2>
          <div className="py-3 mb-4 text-[14px] w-full font-normal border hover:border-colorBlueBold text-center mt-4 rounded-lg ">
            <div className="hover:scale-125 duration-300">
              <TfiFacebook className="text-blue-600 mr-2 inline-block text-[25px]" />
              Với Facebook
            </div>
          </div>
          <div className="py-3  text-[14px] w-full font-normal border hover:border-colorBlueBold text-center mb-4 rounded-lg">
            <button
              className="hover:scale-125 duration-300 w-full"
              onClick={GoogleSignIn1}
            >
              <FcGoogle className="text-blue-600 text-[25px] mr-2 inline-block" />
              Với Google
            </button>
          </div>

          <div className="border h-0 w-full relative mt-2 mb-4">
            <p className="absolute bg-white px-10 py-1  -top-4 left-[20%]">
              Hoặc tiếp tục với email
            </p>
          </div>

          <div className="w-full mt-3 mb-6  h-[89px] font-semibold text-[13px] ">
            <div className="mb-2">
              Địa chỉ Email<p className="text-red-700 inline-block ml-1">*</p>
            </div>
            <div className="w-full border rounded-lg mb-1">
              <input
                type="text"
                className="p-2 w-full font-normal rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errorMessage && (
              <p className="text-red-600 font-normal  ml-2">
                Định dạng email không hợp lệ !
              </p>
            )}
          </div>

          <div className=" mb-4 w-full ">
            <button
              className="py-3 bg-colorBlueBold text-white w-full hover:bg-colorBlueBoldHover rounded-lg"
              onClick={() => HandleLogin()}
            >
              Tiếp tục
            </button>
          </div>

          <div className="text-center text-[13px] font-normal text-colortopdownGray">
            <p>Bằng việc nhấn nút tiếp tục, bạn đã đồng ý với</p>
            <p>
              <a href="/" className="text-blue-600 hover:underline">
                Điều khoản sử dụng
              </a>{" "}
              và{" "}
              <a href="/" className="text-blue-600 hover:underline">
                Chính sách bảo mật
              </a>{" "}
              của Việc Làm 24h
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://vieclam24h.vn/img/loginv2/bg-login.png"
            alt=""
            className="object-contain"
          />
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white"
          onClick={HandleExit}
        />
      </div>
    </div>
  );
};

export default Login;
