import DropDown from "@components/DropDown/DropDown";
import DropDownS from "@components/DropDown/DropDownS";
import HeaderItem from "@components/Item/HeaderItem";
import Link from "next/link";
import React from "react";
import { BsListTask } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = ({ Login }: any) => {
  return (
    <div className="font-LexendDeca h-[113px] bg-primary">
      {" "}
      <div className="bg-primary flex flex-row  justify-evenly h-16 text-white items-center cursor-pointer ">
        <div className=" flex">
          <div className="h-16 leading-[64px] pr-4 border-r border-[#5C27D6] w-[144px]  text-center">
            <a className=" " href="/">
              logo
            </a>
          </div>
          <div className="flex  text-[13px] font-semibold">
            <Link
              className="h-16 leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px]"
              href="/cohoivieclam"
            >
              Cơ hội việc làm
            </Link>
            <div className="h-16 leading-[64px] hover:bg-privaryhover px-4 group">
              <div className="inline-block  relative">
                Công cụ
                <div className="absolute right-[-130px] top-[75px] hidden  group-hover:block ">
                  <DropDown />
                </div>
              </div>
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
        <div className="flex  text-[13px] font-semibold ">
          <div className="h-16 leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px] relative  group">
            Miền nam
            <IoMdArrowDropdown className="text-white ml-1 text-[20px] inline-block" />
            <div className="absolute right-0 top-[75px] hidden  group-hover:block ">
              <DropDownS />
            </div>
          </div>
          <div className="flex flex-col justify-center h-16 leading-[32px] hover:bg-privaryhover pl-[28px] pr-[20px]">
            <p className=" text-[10px] leading-[16px] font-semibold">
              Người tìm việc
            </p>
            <h3
              className=" text-[14px]  leading-[24px] font-semibold"
              onClick={() => Login(true)}
            >
              Đăng ký/Đăng nhập
            </h3>
          </div>
          <div className="h-16 text-[14px]  leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px] border-l border-[#5C27D6]">
            Nhà Tuyển Dụng
          </div>
        </div>
      </div>
      <div className="w-full bg-white border-b cursor-pointer">
        <div className="bg-white h-[49px]  text-primary items-center flex flex-row justify-evenly mx-60">
          <div className="ml-10 hover:scale-125 duration-300 hover:text-black">
            <BsListTask className=" text-[34px] font-bold" />
          </div>
          <div>
            <ul className="flex gap-1 items-center text-[13px] font-semibold">
              <li className="flex items-center hover:bg-colortopdownGray2 p-2">
                Bán buôn - Bán lẻ - Quản lý cửa hàng
              </li>
              <HeaderItem text="Kinh Doanh" />
              <HeaderItem text="Marketing" />
              <HeaderItem text="Khoa học - Kỹ thuật" />
              <HeaderItem text=" Nghề nghiệp khác" />
              <HeaderItem text="Hành chính - Thư ký" />
              <div className="bg-[#B6B6B8] w-1 h-1 rounded-sm mx-2 inline-block "></div>
              <li className="flex items-center hover:bg-colortopdownGray2 p-2">
                Kế toán
              </li>
            </ul>
          </div>
          <div className="bg-[rgba(225,240,255,1)] leading-[50px]  text-[#0669cc] hover:bg-[rgba(188,221,255,1)] px-6 ">
            Tạo hồ sơ ngay
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
