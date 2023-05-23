import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Cohoivieclam = () => {
  return (
    <div className="mx-72 font-LexendDeca">
      <div className="relative mb-16">
        <div className="flex flex-row gap-2 justify-center items-center py-[32px] bg-colorBlueBold rounded-lg mt-4">
          <div className="p-3 bg-white font-thin">
            <AiOutlineSearch className="inline-block  text-[25px]" />
            <input type="text" placeholder="Tìm kiếm cơ hội việc làm" />
          </div>
          <div className="p-3 bg-white font-thin">
            <input type="text" placeholder="Tất cả nghề nghiệp" />
            <IoIosArrowDown className="inline-block ml-2" />
          </div>
          <div className="p-3 bg-white font-thin">
            <input type="text" placeholder="Tất cả tỉnh thành" />
            <IoIosArrowDown className="inline-block ml-2" />
          </div>
          <button className="py-3 px-6 text-white bg-colortopdownBlue">
            Tìm kiếm
          </button>
          <button className="py-3 px-6 text-white bg-colortopdownGray">
            Lọc nâng cao
          </button>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center text-[12px] p-3 pb-4 absolute bg-white rounded-md w-full -bottom-14 z-20">
          <div className="font-thin text-[12px]">Lọc nâng cao:</div>

          <div className="p-3 border font-thin  ">
            <input
              type="text"
              placeholder="Tất cả kinh nghiệm"
              className="w-[130px]"
            />
            <IoIosArrowDown className="inline-block ml-2" />
          </div>
          <div className="p-3 border font-thin ">
            <input
              type="text"
              placeholder="Tất cả kinh nghiệm"
              className="w-[130px]"
            />
            <IoIosArrowDown className="inline-block ml-2" />
          </div>
          <div className="p-3 border font-thin ">
            <input
              type="text"
              placeholder="Tất cả kinh nghiệm"
              className="w-[130px]"
            />
            <IoIosArrowDown className="inline-block ml-2" />
          </div>
          <div className="p-3 border font-thin ">
            <input
              type="text"
              placeholder="Tất cả kinh nghiệm"
              className="w-[130px]"
            />
            <IoIosArrowDown className="inline-block ml-2" />
          </div>
          <div className="p-3 border font-thin ">
            <input
              type="text"
              placeholder="Tất cả kinh nghiệm"
              className="w-[130px]"
            />
            <IoIosArrowDown className="inline-block ml-2" />
          </div>
          <div className="p-3 border font-thin ">
            <input
              type="text"
              placeholder="Tất cả kinh nghiệm"
              className="w-[130px]"
            />
            <IoIosArrowDown className="inline-block ml-2" />
          </div>
          <div>
            Xóa chọn |
            <p className="inline-block ml-1 text-colorGrayThin"> Đóng</p>
          </div>
        </div>
      </div>
      <div className="mt-6"></div>
    </div>
  );
};

export default Cohoivieclam;
