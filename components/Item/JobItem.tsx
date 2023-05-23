import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
const JobItem = () => {
  return (
    <div className="p-2  border hover:border-colortopdownBlue rounded-md font-LexendDeca">
      <div className="flex justify-between items-center font-normal text-[14px]">
        Supply Chain & General Services
        <AiOutlineHeart className="inline-block text-colortopdownBlue text-[20px]" />
      </div>
      <div className="flex justify-start gap-2 mt-4">
        <img
          className="object-contain w-[62px] h-[62px]"
          src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg"
          alt="logo"
        />
        <div className="truncate font-normal text text-[13px] flex flex-col gap-1 ">
          <p className="truncate text-[#6f6d71] ">
            Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam
          </p>
          <li>
            <BiMoney className="inline-block text-[#6f6d71] mr-2" />
            10 - 20 triệu
          </li>
          <li>
            <CiLocationOn className="inline-block text-[#6f6d71] mr-2" />
            TP.HCM
          </li>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
