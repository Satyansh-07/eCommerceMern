import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button, RatingBar, CheckBox } from "../../components";
import Header from "../../components/Header";
import ProductListing from './productListing';
import CategoryList from "./categoryList";
import { useParams } from "react-router-dom";


export default function ProductListPage() {
  const {id} = useParams();
  return (
    <>
      <Helmet>
        <title>satyansh_ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex flex-row justify-between items-center w-full p-6 bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full mt-[31px] gap-[51px] max-w-[1632px]">
          <div className="flex flex-row justify-between w-[13%]">
            <Text as="p" className="!font-medium">
              Home
            </Text>
            <Text as="p" className="!text-blue_gray-100 !font-medium">
              {`>`}
            </Text>
            <Text as="p" className="!text-gray-800 !font-medium">
              Product List
            </Text>
          </div>
          <Heading size="md" as="h1">
            Product List
          </Heading>
          <div className="flex flex-row justify-start items-start w-full gap-8">
            <div className="flex flex-col items-start justify-start w-[16%] gap-8">
              <div className="flex flex-col items-start justify-start w-full gap-[31px]">
                <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    Categories
                  </Text>
                  <div className="h-px w-full bg-blue_gray-100" />
                  <CategoryList id={id}/>
                </div>
              </div>
              <div className="h-px w-full bg-blue_gray-100" />
              <div className="flex flex-col items-start justify-start w-[68%] gap-[29px]">
                <Text as="p" className="!text-gray-800 !font-medium">
                  Filter by Price
                </Text>
                <div className="flex flex-col items-start justify-start w-full gap-6">
                  <CheckBox name="allprice" label="All Price" className="gap-4 text-left" />
                  <CheckBox
                    color="gray_800"
                    variant="fill"
                    name="vector_eight"
                    label="$100 - $250"
                    className="gap-4 text-left"
                  />
                  <CheckBox name="square" label="$250 - $500" className="gap-4 text-left" />
                  <CheckBox name="square_one" label="$750 - $1.000" className="gap-4 text-left" />
                  <CheckBox name="square_two" label="$1000 - $1.500" className="gap-4 text-left" />
                </div>
              </div>
              <div className="h-px w-full bg-blue_gray-100" />
              <div className="flex flex-col items-start justify-start w-[79%] gap-[29px]">
                <Text as="p" className="!text-gray-800 !font-medium">
                  Filter by Rating
                </Text>
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <div className="flex flex-row justify-start w-[34%] gap-4">
                    <div className="h-6 w-6 border-blue_gray-100 border-[3px] border-solid" />
                    <div className="flex flex-col items-center justify-start h-6 w-6">
                      <Img src="images/img_star_1_1.svg" alt="image_one" className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-1/2 gap-4">
                    <div className="h-6 w-6 border-blue_gray-100 border-[3px] border-solid" />
                    <div className="flex flex-row justify-start w-[59%] gap-2">
                      <Img src="images/img_star_1_2.svg" alt="image_two" className="h-6 w-6" />
                      <Img src="images/img_star_2_24x24.svg" alt="image_three" className="h-6 w-6" />
                    </div>
                  </div>
                  <RatingBar
                    value={1}
                    isEditable={true}
                    color="#fae952"
                    activeColor="#fae952"
                    size={24}
                    starCount={2}
                    className="flex justify-between w-32"
                  />
                  <div className="flex flex-row justify-start gap-4">
                    <Button size="xs" className="w-6">
                      <Img src="images/img_checkedbox.svg" />
                    </Button>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#fae952"
                      activeColor="#fae952"
                      size={24}
                      starCount={4}
                      className="flex justify-between w-[120px]"
                    />
                  </div>
                  <div className="flex flex-row justify-start w-full gap-4">
                    <div className="h-6 w-6 border-blue_gray-100 border-[3px] border-solid" />
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fae952"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between w-[152px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[84%] gap-[29px]">
              <div className="flex flex-row justify-between w-full">
                <Text as="p" className="!font-medium">
                  <span className="text-gray-500">Viewing </span>
                  <span className="text-gray-800">20 </span>
                  <span className="text-gray-500">of </span>
                  <span className="text-gray-800">160</span>
                  <span className="text-gray-500"> product</span>
                </Text>
                <div className="flex flex-row justify-start items-center gap-4">
                  <Text as="p" className="mt-px">
                    <span className="text-gray-500">Sort by: </span>
                    <span className="text-gray-800">Newest Items</span>
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-6 w-6" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[55px]">
                <div className="flex flex-col items-center justify-start w-full">
                    <ProductListing />
                </div>
                <div className="flex flex-row justify-between items-center w-[22%]">
                  <Img src="/images/img_chevron_down.svg" alt="chevrondown_one" className="h-6 w-6 cursor-pointer" />
                  <div className="flex flex-row w-[68%] gap-6">
                    <div className="flex flex-col items-center justify-start h-[50px] w-1/4">
                      <Button className="min-w-[50px]">1</Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[51px] w-[26%]">
                      <Button color="gray_500" variant="outline" className="min-w-[51px]">
                        2
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[51px] w-[26%]">
                      <Button color="gray_500" variant="outline" className="min-w-[51px]">
                        3
                      </Button>
                    </div>
                  </div>
                  <Img src="/images/img_chevron_down_gray_500.svg" alt="chevrondown" className="h-6 w-6 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full mt-[100px]">
          <div className="flex flex-col items-center justify-center w-full gap-[97px] p-[30px] bg-gray-800">
            <div className="flex flex-row justify-between items-start w-full mt-[31px] max-w-[1632px]">
              <div className="flex flex-col items-start justify-start w-[26%] gap-[31px]">
                <div className="flex flex-row justify-start items-start gap-2">
                  <Img src="images/img_group_19_white_a700.svg" alt="image_four" className="h-6 mt-1" />
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
                    <Img src="images/img_call.svg" alt="call_one" className="h-6 w-6" />
                    <Text as="p" className="!text-white-A700">
                      +1234567890
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2">
                    <Img src="images/img_email_white_a700.svg" alt="email_three" className="h-6 w-6" />
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
                  <Input
                    color="gray_800"
                    variant="fill"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    suffix={
                      <div className="flex justify-center items-center w-[60px] h-[60px] bg-white-A700">
                        <Img src="images/img_arrow_gray_800.svg" alt="Arrow" />
                      </div>
                    }
                    className="w-full gap-[35px] tracking-[0.36px] border-white-A700 border"
                  />
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
