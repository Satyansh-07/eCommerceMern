import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, RatingBar, Button, CheckBox } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function CategorieswithSidebarPage() {
  return (
    <>
      <Helmet>
        <title>satyansh_ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex flex-row justify-between items-center w-full p-6 bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full mt-8 gap-14 max-w-[1636px]">
          <div className="flex flex-row justify-between w-[13%]">
            <Text as="p" className="!font-medium">
              Home
            </Text>
            <Text as="p" className="!text-blue_gray-100 !font-medium">
              {`>`}
            </Text>
            <Text as="p" className="!text-gray-800 !font-medium">
              Categories
            </Text>
          </div>
          <Heading size="md" as="h1">
            Categories
          </Heading>
          <div className="flex flex-row justify-start items-start w-full gap-8">
            <div className="flex flex-col items-center justify-start w-[16%] gap-8">
              <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    Filter by Price
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-start justify-start w-[68%] gap-6">
                  <CheckBox name="allprice" label="All Price" className="gap-4 text-left" />
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Button size="xs" className="w-6">
                      <Img src="images/img_checkedbox.svg" />
                    </Button>
                    <Text as="p" className="!text-gray-800">
                      $100 - $250
                    </Text>
                  </div>
                  <CheckBox name="square" label="$250 - $500" className="gap-4 text-left" />
                  <CheckBox name="square_one" label="$750 - $1.000" className="gap-4 text-left" />
                  <CheckBox name="square_two" label="$1000 - $1.500" className="gap-4 text-left" />
                </div>
              </div>
              <div className="h-px w-full bg-blue_gray-100" />
              <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <Text as="p" className="mt-px !text-gray-800 !font-medium">
                    Filter by Rating
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-start justify-start w-[79%] gap-4">
                  <div className="flex flex-row justify-start w-[34%] gap-4">
                    <div className="h-6 w-6 border-blue_gray-100 border-[3px] border-solid" />
                    <div className="flex flex-col items-center justify-start h-6 w-6">
                      <Img src="images/img_star_1.svg" alt="image_one" className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-1/2 gap-4">
                    <div className="h-6 w-6 border-blue_gray-100 border-[3px] border-solid" />
                    <div className="flex flex-row justify-start w-[59%] gap-2">
                      <Img src="images/img_star_1_24x24.svg" alt="image_two" className="h-6 w-6" />
                      <Img src="images/img_star_2.svg" alt="image_three" className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[67%] gap-4">
                    <div className="h-6 w-6 border-blue_gray-100 border-[3px] border-solid" />
                    <RatingBar
                      value={3}
                      isEditable={true}
                      color="#fae952"
                      activeColor="#fae952"
                      size={24}
                      starCount={3}
                      className="flex justify-between w-[88px]"
                    />
                  </div>
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
              <div className="h-px w-full bg-blue_gray-100" />
              <div className="flex flex-row justify-between items-center w-full">
                <Text as="p" className="mt-px !text-gray-800 !font-medium">
                  Filter by Brand
                </Text>
                <Img src="images/img_arrow_down.svg" alt="arrowdown_five" className="h-6 w-6" />
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <Text as="p" className="mt-px !text-gray-800 !font-medium">
                  Filter by Size
                </Text>
                <Img src="images/img_arrow_down.svg" alt="arrowdown_seven" className="h-6 w-6" />
              </div>
            </div>
            <div className="flex flex-row justify-start w-[84%]">
              <div className="flex flex-col items-center justify-start w-full gap-8">
                <div className="justify-center w-full gap-8 grid-cols-2 grid min-h-[auto]">
                  <div className="flex flex-row justify-center items-center w-full gap-4 p-[43px] bg-gray-50">
                    <Img src="images/img_sweater_gray_800.svg" alt="jacket_one" className="h-40 w-40 ml-[110px]" />
                    <div className="flex flex-col items-start justify-start w-[32%] mr-[109px]">
                      <Heading size="md" as="h2">
                        Jacket
                      </Heading>
                      <Text size="lg" as="p">
                        Collection
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center w-full gap-4 p-[43px] bg-gray-50">
                    <Img src="images/img_tshirt.svg" alt="tshirt_one" className="h-40 w-40 ml-[109px]" />
                    <div className="flex flex-col items-start justify-start w-[32%] mr-[109px] gap-px">
                      <Heading size="md" as="h3">
                        Shirt
                      </Heading>
                      <Text size="lg" as="p">
                        Collection
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-center items-center w-full gap-4 p-[43px] bg-gray-50">
                      <Img src="images/img_pants.svg" alt="pants_one" className="h-40 w-40 ml-[109px]" />
                      <div className="flex flex-col items-start justify-start w-[32%] mr-[108px]">
                        <Heading size="md" as="h4">
                          Pants
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center w-full gap-4 p-[43px] bg-gray-50">
                    <Img src="images/img_skirt.svg" alt="skirt_one" className="h-40 w-40 ml-[109px]" />
                    <div className="flex flex-col items-start justify-start w-[32%] mr-[109px] gap-px">
                      <Heading size="md" as="h5">
                        Skirt
                      </Heading>
                      <Text size="lg" as="p">
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="justify-center w-full gap-[34px] grid-cols-2 grid min-h-[auto]">
                  <div className="flex flex-row justify-center w-full p-[43px] bg-gray-50">
                    <div className="flex flex-row justify-start items-center w-[63%] gap-4 mx-[108px] bg-gray-50">
                      <Img src="images/img_dress.svg" alt="dress_one" className="h-40 w-40" />
                      <div className="flex flex-col items-start justify-start w-[51%]">
                        <Heading size="md" as="h6">
                          Dress
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[43px] bg-gray-50">
                    <div className="flex flex-row justify-start items-center w-[67%] gap-4 mx-24 bg-gray-50">
                      <Img src="images/img_bra_gray_800.svg" alt="bra_one" className="h-40 w-40" />
                      <div className="flex flex-col items-start justify-start w-[54%]">
                        <Heading size="md" as="h1">
                          Underwear
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[43px] bg-gray-50">
                    <div className="flex flex-row justify-start items-center w-[63%] gap-4 mx-[108px] bg-gray-50">
                      <Img src="images/img_boot_gray_800.svg" alt="boot_one" className="h-40 w-40" />
                      <div className="flex flex-col items-start justify-start w-[51%]">
                        <Heading size="md" as="h1">
                          Shoes
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[43px] bg-gray-50">
                    <div className="flex flex-row justify-start items-center w-[67%] gap-4 mx-[97px] bg-gray-50">
                      <Img src="images/img_belt.svg" alt="belt_one" className="h-40 w-40" />
                      <div className="flex flex-col items-start justify-start w-[54%] gap-px">
                        <Heading size="md" as="h1">
                          Accesories
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[85px] p-[30px] bg-gray-800" />
      </div>
    </>
  );
}
