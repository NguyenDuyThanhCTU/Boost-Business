import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FcAlarmClock } from "react-icons/fc";
import { RiSuitcaseLine } from "react-icons/ri";
import JobItem from "@components/Item/JobItem";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div className="font-LexendDeca">
      <div className="mx-72">
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper rounded h-[320px]"
        >
          <SwiperSlide>
            <img
              src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/banner1.webp"
              alt="banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/banner2.webp"
              alt="banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/banner3.webp"
              alt="banner"
            />
          </SwiperSlide>
        </Swiper>
        <div className="px-20 pt-6 pb-3">
          <div className="flex justify-start cursor-pointer">
            <div className="border flex items-center flex-col gap-5 p-3 hover:shadow-lg">
              <img
                className="w-[96px] h-[92px]"
                src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri1.webp"
                alt="logo"
              />

              <div className="">
                <RiSuitcaseLine className="inline-block mr-2" />
                50 vị trí đang tuyển
              </div>
            </div>
            <div className="border flex items-center flex-col gap-5 p-3 hover:shadow-lg">
              <img
                className="w-[96px] h-[92px]"
                src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri6.webp"
                alt="logo"
              />

              <div className="">
                <RiSuitcaseLine className="inline-block mr-2" />
                50 vị trí đang tuyển
              </div>
            </div>
            <div className="border flex items-center flex-col gap-5 p-3 hover:shadow-lg">
              <img
                className="w-[96px] h-[92px]"
                src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri5.webp"
                alt="logo"
              />

              <div className="">
                <RiSuitcaseLine className="inline-block mr-2" />
                50 vị trí đang tuyển
              </div>
            </div>
            <div className="border flex items-center flex-col gap-5 p-3 hover:shadow-lg">
              <img
                className="w-[96px] h-[92px]"
                src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri2.webp"
                alt="logo"
              />

              <div className="">
                <RiSuitcaseLine className="inline-block mr-2" />
                50 vị trí đang tuyển
              </div>
            </div>
            <div className="border flex items-center flex-col gap-5 p-3 hover:shadow-lg">
              <img
                className="w-[96px] h-[92px]"
                src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri3.webp"
                alt="logo"
              />

              <div className="">
                <RiSuitcaseLine className="inline-block mr-2" />
                50 vị trí đang tuyển
              </div>
            </div>
            <div className="border flex items-center flex-col gap-5 p-3 hover:shadow-lg">
              <img
                className="w-[96px] h-[92px]"
                src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri4.webp"
                alt="logo"
              />

              <div className="">
                <RiSuitcaseLine className="inline-block mr-2" />
                50 vị trí đang tuyển
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border mx-72 my-[32px]">
        <div className="px-12 py-[18px] ">
          <div className="text-[32px] font-bold">
            <FcAlarmClock className="inline-block mr-3" />
            Việc làm tuyển gấp
          </div>

          <Swiper
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className=" "
          >
            <SwiperSlide>
              <div className="grid grid-cols-3 grid-rows-6 gap-4 mt-5">
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-3 grid-rows-6 gap-4 mt-5">
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex items-center flex-col  mx-72">
        <div className="mb-5 w-full ">
          <img
            className="w-full rounded-md"
            src="https://vieclam24h.vn/img/banner-home-regis-pc.png"
            alt="ads"
          />
        </div>
        <div className="relative">
          <img
            className="rounded-md"
            src="https://vieclam24h.vn/img/explore-interesting/banner-explore-pc-v2.png"
            alt="ads"
          />
          <div className="text-white">
            <h3 className="text-[32px] absolute top-7 left-14 e font-bold">
              Cần tìm việc làm phù hợp cho bạn?{" "}
            </h3>
            <div className="absolute right-14 top-7 rounded-md py-3 px-[32px] bg-purple-800 text-[20px] font-semibold">
              <AiOutlineSearch className="inline-block text-[25px] mr-2" />
              Bắt đầu khám phá
            </div>
          </div>
        </div>
      </div>

      <div className="mx-80 mt-20 mb-16">
        <h3 className="mb-9 text-center text-[32px] font-bold">
          Cẩm nang nghề nghiệp
        </h3>
        <div className="grid grid-cols-3 gap-5 cursor-pointer">
          <div className=" p-3 w-[370px] h-[356px] hover:shadow-lg">
            <img
              className="rounded-t-md"
              src="https://nghenghiep.vieclam24h.vn/wp-content/uploads/2023/05/viec-lam-ca-dem-min.jpg"
              alt="img"
            />
            <h3 className=" py-5 text-[18px] font-bold">
              Top các việc làm ca đêm thu nhập hấp dẫn mà bạn chớ nên bỏ qua
            </h3>
            <p className="truncate font-semibold">
              Trong xã hội hiện đại, công việc ca đêm đang trở thành một lựa
              chọn phổ biến đối với nhiều người. Một số người chọn công việc ca
              đêm vì có lối sống năng động và thích{" "}
            </p>
          </div>
          <div className=" p-3 w-[370px] h-[356px] hover:shadow-lg">
            <img
              className="rounded-t-md"
              src="https://nghenghiep.vieclam24h.vn/wp-content/uploads/2023/05/viec-lam-ca-dem-min.jpg"
              alt="img"
            />
            <h3 className=" py-5 text-[18px] font-bold">
              Top các việc làm ca đêm thu nhập hấp dẫn mà bạn chớ nên bỏ qua
            </h3>
            <p className="truncate font-semibold">
              Trong xã hội hiện đại, công việc ca đêm đang trở thành một lựa
              chọn phổ biến đối với nhiều người. Một số người chọn công việc ca
              đêm vì có lối sống năng động và thích{" "}
            </p>
          </div>
          <div className=" p-3 w-[370px] h-[356px] hover:shadow-lg">
            <img
              className="rounded-t-md"
              src="https://nghenghiep.vieclam24h.vn/wp-content/uploads/2023/05/viec-lam-ca-dem-min.jpg"
              alt="img"
            />
            <h3 className=" py-5 text-[18px] font-bold">
              Top các việc làm ca đêm thu nhập hấp dẫn mà bạn chớ nên bỏ qua
            </h3>
            <p className="truncate font-semibold">
              Trong xã hội hiện đại, công việc ca đêm đang trở thành một lựa
              chọn phổ biến đối với nhiều người. Một số người chọn công việc ca
              đêm vì có lối sống năng động và thích{" "}
            </p>
          </div>
        </div>
        <div className="mt-10  flex items-center justify-center cursor-pointer ">
          <div className=" py-2 px-4 border-[1.5px] text-blue-700  hover:text-colortopdownBlue hover:border-colortopdownBlue">
            <p className="uppercase text-[12px]  font-bold ">
              Xem thêm cẩm nang nghề nghiệp
            </p>
          </div>
        </div>
      </div>

      <div className="mb-11 cursor-pointer flex justify-between mx-80">
        <div className="flex flex-col gap-3">
          <h3>Việc làm theo Nghề nghiệp</h3>
          <div className="font-thin text-[14px]">
            <p className="hover:text-colortopdownBlue">
              Việc làm Hành chính - Thư ký
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm An ninh - Bảo vệ
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Thiết kế - Sáng tạo nghệ thuật
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Kiến trúc - Thiết kế nội thất
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Khách sạn - Nhà hàng - Du lịch
            </p>
          </div>
          <div className="text-[12px] text-blue-800 hover:text-colortopdownBlue">
            Xem tất cả nghề nghiệp
            <MdKeyboardArrowRight className="inline-block text-[14px] ml-2" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3>Việc làm theo Nghề nghiệp</h3>
          <div className="font-thin text-[14px]">
            <p className="hover:text-colortopdownBlue">
              Việc làm Hành chính - Thư ký
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm An ninh - Bảo vệ
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Thiết kế - Sáng tạo nghệ thuật
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Kiến trúc - Thiết kế nội thất
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Khách sạn - Nhà hàng - Du lịch
            </p>
          </div>
          <div className="text-[12px] text-blue-800 hover:text-colortopdownBlue">
            Xem tất cả nghề nghiệp
            <MdKeyboardArrowRight className="inline-block text-[14px] ml-2" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3>Việc làm mới</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
