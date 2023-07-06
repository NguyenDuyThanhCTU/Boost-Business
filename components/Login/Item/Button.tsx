"use client";
import { LoginButtonItems, iconMapping } from "@utils/item";
import { IconType } from "react-icons";

const Button = () => {
  return (
    <>
      {LoginButtonItems.map((items, idx) => {
        let Icon: IconType = iconMapping[items.icon];
        return (
          <>
            <div className="py-3 mb-4 text-[14px] w-full font-normal border hover:border-colorBlueBold text-center mt-4 rounded-lg ">
              <div className="hover:scale-125 duration-300">
                {Icon && (
                  <Icon className="text-blue-600 mr-2 inline-block text-[25px]" />
                )}
                {items.name}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Button;
