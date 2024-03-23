import { useParams } from "react-router-dom";
import { Text, Img, Button } from "../../components";
import ProductListingContent from './productListingContent.jsx';


export default function ProductListing(){
    const {id} = useParams();
    return(
        <div className="flex flex-col items-center justify-start w-[84%] gap-[29px]">
            <div className="flex flex-row justify-between w-full">
            <Text as="p" className="!font-medium">
                <span className="text-gray-500">Viewing </span>
                <span className="text-gray-800">20 </span>
                <span className="text-gray-500">of </span>
                <span className="text-gray-800">160</span>
                <span className="text-gray-500"> product</span>
            </Text>
            <div className="flex flex-row justify-start items-center gap-4 cursor-pointer">
                <Text as="p" className="mt-px">
                <span className="text-gray-500">Sort by: </span>
                <span className="text-gray-800">Newest Items</span>
                </Text>
                <Img src="/images/img_arrow_down.svg" alt="arrowdown_three" className="h-6 w-6" />
            </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[55px]">
            <div className="flex flex-col items-center justify-start w-full">
                <ProductListingContent id={id} />
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
    )
}
