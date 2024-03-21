import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetailsPage() {
  const [data, setData] = useState({});
  let finalInfo, response;
  let {pid} = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    try{  
      async function fetchProductDetails(){
        // throw new Error("THis is an error");
        response = await fetch('http://localhost:1338/fetchProduct/' + pid);
        finalInfo = await response.json();
        setData(finalInfo);
      }
      fetchProductDetails();
    }
    catch(err){
      navigate("/notFound");
    }
  }, [])
  return (
    <>
      <Helmet>
        <title>satyansh_ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex flex-row justify-between items-center w-full p-6 bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full mt-[31px] gap-[181px] max-w-[1632px]">
          <div className="flex flex-row justify-start items-center w-full gap-8">
            <div className="flex flex-col items-center justify-start w-1/2 gap-8">
              <div className="flex flex-row justify-center h-[400px] w-[400px]">
                <Img src={data.image} alt="placeholder_one" className="w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-1/2 gap-14">
              <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                <div className="flex flex-row justify-between">
                  <Text as="p" className="mb-0.5 !font-medium">
                    Featured
                  </Text>
                  <Text as="p" className="!text-blue_gray-100 !font-medium mx-4">
                    {`>`}
                  </Text>
                  <Text as="p" className="!font-medium">
                    {data.title}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[31px]">
                  <Heading size="lg" as="h1" className="w-[49%] line-clamp-3">
                    {data.title}
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[31px]">
                    <Text size="lg" as="p">
                      $299
                    </Text>
                    <div className="h-px w-full bg-blue_gray-100" />
                  </div>
                  <Text as="p" className="leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[35%] gap-6">
                <Text as="p" className="!text-gray-800 !font-medium">
                  Quantity
                </Text>
                <div className="flex flex-row justify-start w-[63%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Button
                      color="blue_gray_100"
                      className="w-full !text-gray-800 font-medium z-[1] border-blue_gray-100 border border-solid"
                    >
                      1
                    </Button>
                    <div className="flex flex-row justify-between w-full mt-[-48px]">
                      <div className="flex flex-col items-center justify-center h-12 w-12 p-[19px] bg-gray-50">
                        <div className="h-0.5 w-[90%] my-[3px] bg-gray-500" />
                      </div>
                      <Button size="sm" className="w-12">
                        <Img src="/images/img_increase.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                size="6xl"
                rightIcon={<Img src="/images/img_cart_white_a700.svg" alt="Cart" />}
                className="gap-4 font-bold min-w-[245px]"
              >
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[33px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-between items-center w-auto gap-8">
                <Heading size="md" as="h2">
                  Similiar Product
                </Heading>
                <a href="#">
                  <Text as="p" className="!font-medium">
                    View all
                  </Text>
                </a>
              </div>
              <div className="flex flex-row justify-start gap-4">
                <Img src="/images/img_arrow_blue_gray_100.svg" alt="arrow_one" className="h-12 w-12" />
                <Img src="/images/img_arrow_gray_800_48x48.svg" alt="arrow_three" className="h-12 w-12" />
              </div>
            </div>
            <div className="flex flex-row w-full gap-8">
              <div className="flex flex-col items-center justify-center w-[24%] gap-3.5 px-14 py-[67px]">
                <Img
                  src="/images/img_placeholder_1.png"
                  alt="black_briefcase"
                  className="w-[250px] mt-3.5 object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[68%] mb-3.5 gap-[9px]">
                  <Text size="md" as="p" className="!text-gray-800">
                    Black Briefcase
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[24%] gap-3.5 px-14 py-[67px]">
                <Img
                  src="/images/img_placeholder_24.png"
                  alt="placeholder_one"
                  className="w-[250px] mt-3.5 object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[41%] mb-3.5 gap-[9px]">
                  <Text size="md" as="p" className="!text-gray-800">
                    Pink Shirt
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[24%] gap-4 px-14 py-[67px]">
                <Img
                  src="/images/img_travel_8v7cnke.png"
                  alt="placeholder_one"
                  className="w-[250px] mt-3.5 object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[54%] mb-3.5 gap-1.5">
                  <Text size="md" as="p" className="!text-gray-800">
                    Gray T-shirt
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[24%] gap-[15px] px-14 py-[67px]">
                <Img
                  src="/images/img_placeholder_2.png"
                  alt="placeholder_one"
                  className="w-[250px] mt-3.5 object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[52%] mb-[13px] gap-[9px]">
                  <Text size="md" as="p" className="!text-gray-800">
                    Red Flannel
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full mt-[100px] p-[30px] bg-gray-800">
          <div className="flex flex-col items-center justify-center w-[88%] mt-[31px] gap-[97px] mx-[113px]">
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-col items-start justify-start w-[26%] gap-[31px]">
                <div className="flex flex-row justify-start items-start gap-2">
                  <Img src="/images/img_group_19_white_a700.svg" alt="image_one" className="h-6 mt-1" />
                  <Heading as="h4" className="!text-white-A700">
                    Elliye{" "}
                  </Heading>
                </div>
                <div className="flex flex-row justify-start">
                  <Text as="p" className="leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <div className="flex flex-row justify-start items-center w-full gap-2 py-0.5">
                    <Img src="/images/img_call.svg" alt="call_one" className="h-6 w-6" />
                    <Text as="p" className="!text-white-A700">
                      +1234567890
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2">
                    <Img src="/images/img_email_white_a700.svg" alt="email_three" className="h-6 w-6" />
                    <Text as="p" className="mt-0.5 !text-white-A700">
                      elliye@support.com
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-start w-[58%] gap-8">
                <div className="flex flex-col items-start justify-start w-[27%] gap-[33px]">
                  <Heading as="h4" className="!text-white-A700">
                    Product Links
                  </Heading>
                  <div className="flex flex-col items-start justify-center gap-[15px]">
                    <Text as="p" className="mt-px">
                      Categories
                    </Text>
                    <Text as="p">New Arrival</Text>
                    <Text as="p">Features</Text>
                    <Text as="p">Collections</Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-[27%] gap-[29px]">
                  <Heading as="h4" className="mt-0.5 !text-white-A700">
                    Company
                  </Heading>
                  <div className="flex flex-col items-start justify-start">
                    <Text as="p">About</Text>
                    <Text as="p" className="mt-3">
                      Blog
                    </Text>
                    <a href="#" className="mt-[7px]">
                      <Text as="p">Careers</Text>
                    </a>
                    <Text as="p" className="mt-[9px]">
                      Services
                    </Text>
                    <a href="#" className="mt-3">
                      <Text as="p">Privacy Policy</Text>
                    </a>
                    <a href="#" className="mt-[7px]">
                      <Text as="p">Terms of service</Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[41%] gap-[30px]">
                  <Heading as="h4" className="!text-white-A700">
                    Join our Newsletter
                  </Heading>
                  <Text as="p">Drop your email below to get update, promotions, coupons, and more!</Text>
                  <div className="flex flex-row justify-start">
                    <Input
                      color="gray_800"
                      variant="fill"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      suffix={
                        <div className="flex justify-center items-center w-[60px] h-[60px] bg-white-A700">
                          <Img src="/images/img_arrow_gray_800.svg" alt="Arrow" />
                        </div>
                      }
                      className="w-full gap-3 tracking-[0.36px] border-white-A700 border"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Text size="xs" as="p" className="!text-blue_gray-100">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
