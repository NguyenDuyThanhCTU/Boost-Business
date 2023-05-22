import Link from "next/link";
import React, { ReactNode } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="font-LexendDeca h-[113px]">
        <div className="bg-primary flex flex-row  justify-evenly h-16 text-white items-center">
          <div className=" flex">
            <div className="h-16 leading-[64px] pr-4 border-r border-[#5C27D6]">
              <a className=" " href="/">
                logo
              </a>
            </div>
            <div className="flex">
              <Link
                className="h-16 leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px]"
                href="/"
              >
                Cơ hội việc làm
              </Link>
              <div className="h-16 leading-[64px] hover:bg-privaryhover px-4 ">
                <p className="inline-block "> Công cụ</p>
                <p className="inline-block hover:scale-125 duration-300 ml-[5px] text-[10px] font-medium text-white bg-[#FC5434] px-2 rounded-lg leading-4	">
                  MỚI
                </p>
                <IoMdArrowDropdown className="text-white ml-1 text-[20px] inline-block" />
              </div>
              <Link
                className="h-16 leading-[64px] hover:bg-privaryhover px-2"
                href="/"
              >
                Gói đăng tin miễn phí
              </Link>
            </div>
          </div>
          <div className="flex ">
            <div className="h-16 leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px]">
              Miền nam
            </div>
            <div className="flex flex-col h-16 leading-[32px] hover:bg-privaryhover pl-[28px] pr-[20px]">
              <p>Người tìm việc</p>
              <h3>Đăng ký/Đăng nhập</h3>
            </div>
            <div className="h-16 leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px]">
              Nhà Tuyển Dụng
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
