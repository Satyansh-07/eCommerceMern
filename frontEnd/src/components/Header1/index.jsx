import React from "react";
import { Button, Img, Heading } from "./..";

export default function Header1({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-end items-center w-full gap-[541px] p-6 bg-white-A700">
        <div className="flex flex-row justify-start items-start w-[6%] gap-2">
          <Img src="images/img_group_19.svg" alt="image" className="h-6 mt-1" />
          <Heading as="h4">Elliye </Heading>
        </div>
        <div className="flex flex-row justify-between items-center w-[12%] mr-[120px]">
          <div className="flex flex-row justify-between w-auto gap-8">
            <Img src="images/img_cart.svg" alt="cart_one" className="h-6 w-6" />
            <Img src="images/img_email_gray_800.svg" alt="email_one" className="h-6 w-6" />
          </div>
          <Button className="font-medium min-w-[107px]">Login</Button>
        </div>
      </div>
      <div className="h-px w-full mx-auto bg-gray-50 max-w-[1632px]" />
    </header>
  );
}
