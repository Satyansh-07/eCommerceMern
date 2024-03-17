import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, RatingBar, Button } from "../../components";
import HeroCategory from './heroCategory';
import ProductCard from '../../components/productCard.jsx';
import Header from '../../components/Header';


export default function HomepageVThreePage() {
  const [featuredProductsOne, setFeaturedProductsOne] = useState([]);
  const [featuredProductsTwo, setFeaturedProductsTwo] = useState([]);
  useEffect(() => {
    async function fetchFeaturedProducts(){
      try{
        let response = await fetch('http://localhost:1338/featuredProducts');
        let data = await response.json();
        let firstSetFeaturedProduct = data.slice(0, 4);
        let secondSetFeaturedProduct = data.slice(4, data.length);
        setFeaturedProductsOne(firstSetFeaturedProduct);
        setFeaturedProductsTwo(secondSetFeaturedProduct);
      }
      catch(err){
        console.log("Couldn't fetch featured products " + err);
      }
    }
    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Satyansh_ecommerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="w-full">
          <Header className="flex flex-row justify-between items-center w-full p-6 bg-white-A700" />
          <div className="flex flex-row w-full py-4 gap-[96px] justify-center">
            <HeroCategory categoryName="Men's Clothing" catImage={'img_tshirt_blue_gray_100'}/>
            <HeroCategory categoryName="Women's Clothing" catImage={'img_dress_blue_gray_100'} />
            <HeroCategory categoryName="Electronics" catImage={'img_belt_blue_gray_100'}/>
            <HeroCategory categoryName="Jewelry" catImage={'Jewelry'}/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="h-[718px] w-full relative">
              <Img
                src="images/bannerImage.png"
                alt="placeholder_one"
                className="justify-center h-[718px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-row justify-center w-full h-full pl-[157px] pr-14 left-0 bottom-0 right-0 top-0 py-[157px] m-auto bg-white-A700_82 absolute">
                <div className="flex flex-col items-start justify-start w-2/5 align-center">
                  <Heading size="xl" as="h1" className="mt-[22px] !font-playfairdisplay">
                    Summer Collection
                  </Heading>
                  <Text as="p" className="mt-[25px] !text-gray-800 leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.{" "}
                  </Text>
                  <Button
                    size="3xl"
                    rightIcon={<Img src="images/img_arrow.svg" alt="Arrow" />}
                    className="mt-20 gap-2.5 font-medium min-w-[245px]">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[31px] gap-8 max-w-[1632px]">
            <div className="flex flex-row justify-between items-center w-full">
              <Heading size="md" as="h2">
                Featured
              </Heading>
              <div className="flex flex-row justify-center">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full gap-[34px]">
              <div className="flex flex-col items-center justify-start w-[32%]">
                <div className="justify-center w-full gap-8 grid-cols-2 grid min-h-[auto]">
                  {(featuredProductsOne || []).map((product, index) => {
                    return <ProductCard key={index} productImage={product.image} productTitle={product.title}/>
                  })}
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] pb-[55px] bg-gray-50">
                <Img src="images/img_placeholder_400x521.png" alt="placeholder" className="w-full object-cover" />
                <div className="flex flex-col items-center justify-start w-[55%] mt-[27px] gap-4">
                  <Text size="lg" as="p" className="!text-gray-800 text-center !font-medium">
                    Brown <br />
                    Casual Sneaker
                  </Text>
                  <Text size="lg" as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
                <Button size="5xl" className="mt-[47px] font-bold min-w-[200px]">
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%]">
                <div className="justify-center w-full gap-8 grid-cols-2 grid min-h-[auto]">
                  {(featuredProductsTwo || []).map((product, index) => {
                      return <ProductCard key={index} productImage={product.image} productTitle={product.title}/>
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mt-[99px] max-w-[1630px]">
            <div className="h-[426px] w-full relative">
              <div className="flex flex-col items-start justify-start w-[14%] gap-[17px] left-[2%] top-[7%] m-auto absolute">
                <Heading as="h2" className="!text-white-A700">
                  New Arrival
                </Heading>
                <Text as="p" className="!text-white-A700 leading-8">
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </div>
              <div className="flex flex-row justify-center items-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="h-[426px] w-[24%] bg-gray-800" />
                <div className="flex flex-row w-[84%] ml-[-109px] gap-[26px]">
                  <div className="flex flex-col items-center justify-start w-[24%] gap-3.5 p-[37px] bg-white-A700 shadow-sm">
                    <Img
                      src="images/img_business_shirt_ptnj9lv.png"
                      alt="black_briefcase"
                      className="w-[200px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[76%] gap-[9px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Black Briefcase
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[24%] gap-3.5 p-[37px] bg-white-A700 shadow-sm">
                    <Img src="images/img_sport_j9bzxuy.png" alt="pink3tz3pbbone" className="w-[200px] object-cover" />
                    <div className="flex flex-col items-center justify-start w-[46%] gap-[9px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Pink Shirt
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[24%] gap-4 p-[37px] bg-white-A700 shadow-sm">
                    <Img src="images/img_placeholder_4.png" alt="graytshirt_one" className="w-[200px] object-cover" />
                    <div className="flex flex-col items-center justify-start w-3/5 gap-1.5">
                      <Text size="md" as="p" className="!text-gray-800">
                        Gray T-shirt
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[24%] gap-[15px] p-9 bg-white-A700 shadow-sm">
                    <Img src="images/img_placeholder_5.png" alt="redcheckereds" className="w-[200px] object-cover" />
                    <div className="flex flex-col items-center justify-start w-[57%] gap-[9px]">
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
          </div>
          <div className="flex flex-row w-full mt-[100px] gap-8 max-w-[1633px]">
            <div className="h-[400px] w-[49%] relative">
              <Img
                src="images/img_rectangle_28.png"
                alt="casualcollectio"
                className="justify-center h-[400px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <Text
                size="lg"
                as="p"
                className="w-[29%] h-max left-[10%] bottom-0 top-0 m-auto !text-white-A700 absolute"
              >
                <span className="text-white-A700">
                  Casual
                  <br />
                </span>
                <span className="text-white-A700 font-playfairdisplay text-5xl font-bold">Collection</span>
              </Text>
            </div>
            <div className="h-[400px] w-1/2 relative">
              <Img
                src="images/img_rectangle_29.png"
                alt="image"
                className="justify-center h-[400px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <Text
                size="lg"
                as="p"
                className="w-[29%] h-max left-[10%] bottom-0 top-0 m-auto !text-white-A700 absolute"
              >
                <span className="text-white-A700">
                  Big Vibe <br />
                </span>
                <span className="text-white-A700 font-playfairdisplay text-5xl font-bold">Collection</span>
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mt-[100px]">
            <div className="h-[362px] w-full relative">
              <div className="flex flex-row w-[85%] gap-8 bottom-0 right-0 left-0 m-auto absolute">
                <div className="flex flex-row justify-between items-center w-[24%] p-[46px] bg-white-A700 shadow-xs">
                  <Img src="images/img_truck.svg" alt="free_delivery" className="h-12 w-12" />
                  <div className="flex flex-col items-start justify-start w-[73%] gap-1.5 my-[17px]">
                    <Heading size="xs" as="h2">
                      Free Delivery
                    </Heading>
                    <Text as="p">
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[24%] p-[46px] bg-white-A700 shadow-xs">
                  <Img src="images/img_card.svg" alt="card_one" className="h-12 w-12" />
                  <div className="flex flex-col items-start justify-start w-[73%] pt-0.5 gap-[5px] my-[17px]">
                    <Heading size="xs" as="h3">
                      Payment Method
                    </Heading>
                    <Text as="p">
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[24%] p-[46px] bg-white-A700 shadow-xs">
                  <Img src="images/img_broken.svg" alt="broken_one" className="h-12 w-12" />
                  <div className="flex flex-col items-start justify-start w-[73%] pt-0.5 gap-[5px] my-[17px]">
                    <Heading size="xs" as="h4">
                      Warranty
                    </Heading>
                    <Text as="p">
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[24%] p-[46px] bg-white-A700 shadow-xs">
                  <Img src="images/img_support.svg" alt="support_one" className="h-12 w-12" />
                  <div className="flex flex-col items-start justify-start w-[73%] pt-0.5 gap-[5px] my-[17px]">
                    <Heading size="xs" as="h5">
                      Customer Support{" "}
                    </Heading>
                    <Text as="p">
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full pl-[57px] pr-14 top-0 right-0 left-0 py-[57px] m-auto bg-gray-800 absolute">
                <Heading as="h6" className="mb-[158px] ml-[86px] !text-white-A700">
                  Why Choose Us
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[103px] gap-7 max-w-[1630px]">
            <div className="flex flex-row justify-between items-start w-full">
              <Heading size="md" as="h2">
                Popular this Week
              </Heading>
              <div className="flex flex-row justify-center mt-[9px]">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-row w-full gap-8">
              <div className="flex flex-col items-center justify-start w-[16%] gap-4">
                <Img src="images/img_placeholder_6.png" alt="image" className="w-[245px] object-cover" />
                <div className="flex flex-col items-center justify-start w-[81%] gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    Black Adventure
                    <br />
                    Boots
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between w-28"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] gap-4">
                <Img src="images/img_placeholder_177x177.png" alt="image" className="w-[245px] object-cover" />
                <div className="flex flex-col items-center justify-start w-[65%] gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    Black Formal
                    <br />
                    Highheels
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between w-28"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] gap-4">
                <Img src="images/img_placeholder_250x250.png" alt="image" className="w-[245px] object-cover" />
                <div className="flex flex-col items-center justify-start w-[68%] gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    Brown <br />
                    Casual Shoes
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between w-28"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[16%] gap-4">
                <Img src="images/img_travel_8v7cnke.png" alt="image" className="w-[245px] object-cover" />
                <div className="flex flex-col items-center justify-start ml-[50px] gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    Gray <br />
                    Longpants
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between w-28"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] gap-4">
                <Img src="images/img_mask_group_7.png" alt="image" className="w-[245px] object-cover" />
                <div className="flex flex-col items-center justify-start w-[63%] gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    Green
                    <br />
                    Sport Jacket
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between w-28"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] gap-4">
                <Img src="images/img_placeholder_3.png" alt="image" className="w-[245px] object-cover" />
                <div className="flex flex-col items-center justify-start w-[59%] gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    Blue Denim <br />
                    Skirt
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between w-28"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Img src="images/img_brand.svg" alt="brand_one" className="h-[68px] mt-[99px]" />
        </div>
        <footer className="flex justify-center items-center w-full mt-[100px] p-[30px] bg-gray-800">
          <div className="flex flex-col items-center justify-center w-[88%] mt-[31px] gap-[65px] mx-[113px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-center items-start w-[41%]">
                  <div className="flex flex-col items-start justify-start w-[63%]">
                    <Heading as="h4" className="!text-white-A700">
                      Contacts
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full mt-8 gap-4">
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
                    <Heading as="h4" className="mt-[46px] !text-white-A700">
                      Social Media
                    </Heading>
                    <div className="flex flex-row justify-between w-[29%] mt-[33px]">
                      <Img src="images/img_instagram.svg" alt="instagram_one" className="h-6 w-6" />
                      <div className="flex flex-col items-center justify-start h-6 w-6">
                        <div className="flex flex-col items-center justify-start h-6 w-6">
                          <Img src="images/img_twitter.svg" alt="twitter_one" className="h-6 w-6" />
                        </div>
                      </div>
                      <Img src="images/img_facebook.svg" alt="facebook_one" className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[38%] gap-[33px]">
                    <Heading as="h4" className="!text-white-A700">
                      Product Links
                    </Heading>
                    <div className="flex flex-col items-start justify-start pt-0.5 gap-[15px]">
                      <Text as="p">Categories</Text>
                      <Text as="p">New Arrival</Text>
                      <Text as="p">Features</Text>
                      <Text as="p">Collections</Text>
                      <Text as="p">Discount</Text>
                      <Text as="p">Special Offer</Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-[16%] gap-[29px]">
                  <Heading as="h4" className="mt-0.5 !text-white-A700">
                    Company
                  </Heading>
                  <div className="flex flex-col items-start justify-start gap-[15px]">
                    <Text as="p">About</Text>
                    <Text as="p">Blog</Text>
                    <a href="#">
                      <Text as="p">Careers</Text>
                    </a>
                    <Text as="p">Services</Text>
                    <a href="#">
                      <Text as="p">Privacy Policy</Text>
                    </a>
                    <a href="#">
                      <Text as="p">Terms of service</Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[24%] gap-[30px]">
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
