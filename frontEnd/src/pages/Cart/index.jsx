import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Input, Img } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { product: "Gray T-shirt", quantity: "1", price: "$100.99", total: "$100.99" },
  { product: "Red Flannel", quantity: "1", price: "$100.99", total: "$100.99" },
];

export default function CartPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-center gap-[66px]">
            <div className="flex flex-col items-center justify-start h-[200px] w-[200px] p-[9px] border-blue_gray-100 border border-solid">
              <Img src="images/img_placeholder_2.png" alt="placeholder_one" className="w-[180px] object-cover" />
            </div>
            <Text size="md" as="p" className="!text-gray-800">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[35px] !font-medium">
            Product
          </Text>
        ),
        meta: { width: "661px" },
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <div className="flex flex-col items-center justify-start w-[56%]">
              <Button
                color="blue_gray_100"
                className="w-full !text-gray-800 font-medium z-[1] border-blue_gray-100 border border-solid"
              >
                {info?.getValue()}
              </Button>
              <div className="flex flex-row justify-between w-full mt-[-48px]">
                <div className="flex flex-col items-center justify-center h-12 w-12 p-[19px] bg-gray-50">
                  <div className="h-0.5 w-[90%] my-[3px] bg-gray-500" />
                </div>
                <Button size="sm" className="w-12">
                  <Img src="images/img_increase.svg" />
                </Button>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pt-[5px] pb-[31px] !font-medium">
            Quantity
          </Text>
        ),
        meta: { width: "310px" },
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Text size="md" as="p" className="!text-gray-800">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-[3px] pb-[33px] !font-medium">
            Price
          </Text>
        ),
        meta: { width: "277px" },
      }),
      tableColumnHelper.accessor("total", {
        cell: (info) => (
          <div className="flex flex-row justify-between items-center">
            <Text size="md" as="p" className="mt-28 mb-[114px] !text-gray-800">
              {info?.getValue()}
            </Text>
            <Img src="images/img_.svg" alt="image_one" className="h-[33px] w-[33px]" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pt-1 pb-[33px] !font-medium">
            Total
          </Text>
        ),
        meta: { width: "384px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>satyansh_ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header1 className="flex flex-row justify-between items-center w-full p-6 bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full mt-[31px] max-w-[1632px]">
          <div className="flex flex-row justify-between w-[15%]">
            <Text as="p" className="!font-medium">
              Home
            </Text>
            <Text as="p" className="!text-blue_gray-100 !font-medium">
              {`>`}
            </Text>
            <Text as="p" className="!text-gray-800 !font-medium">
              Shopping Cart
            </Text>
          </div>
          <Heading size="md" as="h1" className="mt-[42px]">
            Shopping Cart
          </Heading>
          <div className="flex flex-row justify-between w-[99%] mt-24">
            <div className="flex flex-row justify-start items-center w-[42%] gap-[21px]">
              <div className="flex flex-row justify-start items-center w-[39%] gap-6">
                <Text
                  size="md"
                  as="p"
                  className="flex justify-center items-center h-14 !text-gray-800 border-gray-800 border-2 border-solid text-center rounded-[50%]"
                >
                  1
                </Text>
                <Text size="md" as="p" className="!text-gray-800">
                  Shopping Cart
                </Text>
              </div>
              <div className="h-0.5 w-[59%] bg-gray-800" />
            </div>
            <div className="flex flex-row justify-start w-[56%] gap-8">
              <div className="flex flex-row justify-between items-center w-[72%]">
                <div className="flex flex-row justify-start items-center gap-6">
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-center items-center h-14 !text-blue_gray-100 border-blue_gray-100 border-2 border-solid text-center rounded-[50%]"
                  >
                    2
                  </Text>
                  <Text size="md" as="p" className="!text-blue_gray-100">
                    Checkout
                  </Text>
                </div>
                <div className="h-0.5 w-[61%] bg-blue_gray-100" />
              </div>
              <div className="flex flex-row justify-start items-center w-1/4 gap-6">
                <Text
                  size="md"
                  as="p"
                  className="flex justify-center items-center h-14 !text-blue_gray-100 border-blue_gray-100 border-2 border-solid text-center rounded-[50%]"
                >
                  3
                </Text>
                <Text size="md" as="p" className="!text-blue_gray-100">
                  Completed
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start w-full mt-[79px] gap-[79px]">
            <div className="flex flex-col items-center justify-start w-full gap-[31px]">
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "" }}
                rowDataProps={{ className: "" }}
                className="w-[1632px]"
                columns={tableColumns}
                data={tableData}
              />
              <div className="flex flex-row justify-between items-start w-full">
                <Input
                  name="apply_code"
                  placeholder="Enter coupon code"
                  className="w-[29%] mt-px gap-[35px] tracking-[0.36px]"
                />
                <div className="flex flex-col items-end justify-start gap-4">
                  <Text as="p" className="mr-[3px] !font-medium">
                    Total
                  </Text>
                  <Heading size="md" as="h2">
                    $202.00
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-[26%]">
              <Button variant="outline" className="font-medium min-w-[207px]">
                Continue Shopping
              </Button>
              <Button className="font-medium min-w-[171px]">Checkout</Button>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[100px] p-[30px] bg-gray-800" />
      </div>
    </>
  );
}
