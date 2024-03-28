import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Input, Heading } from "./..";
import { Link } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import {CartItemCount} from '../../state/atoms/atoms';

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const currentCartItems = useRecoilValue(CartItemCount);
  return (
    <header {...props}>
      <Link to="/">
        <div className="flex flex-row justify-start items-start ml-[120px] gap-2">
          <Img src="/images/img_group_19.svg" alt="image" className="h-6 mt-1" />
          <Heading as="h4" className="cursor-pointer">Elliye </Heading>
        </div>
      </Link>
      <div className="flex flex-row justify-between w-3/5 mr-[120px]">
        <Input
          color="white_A700"
          size="xs"
          variant="fill"
          name="search"
          placeholder="Search here"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          suffix={
            <div className="flex justify-center items-center w-12 h-12 bg-gray-800">
              {searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={18} width={18} />
              ) : (
                <Img src="/images/img_search_white_a700_18x18.svg" alt="search" className="cursor-pointer" />
              )}
            </div>
          }
          className="w-[53%] gap-[35px] text-gray-500_87 border-gray-50 border-2"
        />
        <div className="flex flex-row justify-between items-center">
          <Link to='/cart' className="mr-8 relative">
            <Img src="/images/img_cart.svg" alt="cart_one" className="h-6 w-6 cursor-pointer" />
            {!!currentCartItems && <div className="rounded-full h-[14px] w-[14px] bg-gray-800 text-white-A700 text-[10px] text-center absolute right-[-2px] top-[-5px]">
              {currentCartItems}
            </div>}
          </Link>
          <Link to="/login">
            <Button size="md" className="font-bold min-w-[107px]">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
