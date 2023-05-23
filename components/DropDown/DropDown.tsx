import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { BiBookAlt, BiCalculator } from "react-icons/bi";
import { RxMagicWand } from "react-icons/rx";
const DropDown = () => {
  return (
    <div className="p-3 min-w-[260px] border-colortopdownBlue border border-solid rounded bg-white relative z-10 ">
      <div>
        <ul className="text-colortopdownGray leading-6 text-[13px] font-semibold">
          <li className=" hover:bg-colortopdownBlue1  duration-300 element-dropdown">
            <BsEmojiSmile className="inline-block text-colortopdownBlue mr-2" />
            Trắc ngiệm tính cách
          </li>
          <li className="hover:bg-colortopdownBlue1  duration-300 element-dropdown">
            <BiCalculator className="inline-block text-colortopdownBlue mr-2" />
            Tính lương Gross sang Net
          </li>
          <li className="hover:bg-colortopdownBlue1  duration-300 element-dropdown">
            <RxMagicWand className="inline-block text-colortopdownBlue mr-2 " />
            Trang trí CV
          </li>
          <li className="hover:bg-colortopdownBlue1  duration-300 element-dropdown">
            <BiBookAlt className="inline-block text-colortopdownBlue mr-2" />
            Cẩm nang nghề nghiệp
          </li>
        </ul>
      </div>
      <div className="absolute w-4 h-4 border border-b-0 border-r-0 bg-white border-solid border-colortopdownBlue -top-2 right-[50%] transform rotate-45 z-0"></div>
      <div className="w-full h-4 bg-none absolute -top-3"> </div>
    </div>
  );
};

export default DropDown;
