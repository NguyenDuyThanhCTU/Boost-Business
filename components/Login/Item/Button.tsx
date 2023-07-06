"use client";
import { useStateProvider } from "@context/StateProvider";
import React from "react";

const Button = () => {
  const { setTest } = useStateProvider();
  return (
    <button
      className="border border-blue-400 p-5 w-36 cursor-pointer"
      onClick={(prev) => setTest(!prev)}
    >
      Click me!
    </button>
  );
};

export default Button;
