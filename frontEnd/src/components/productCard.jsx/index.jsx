import { Link } from "react-router-dom";
import { Text, Img} from "../../components";

export default function ProductCard(props){
    return(
        <Link to={"/productdetails/" + props.pid}>
            <div className="flex flex-col items-center justify-start w-full gap-4">
                <div className="max-h-[300px] max-w-[245px]">
                    <Img src={props.productImage} alt="green_warm" className="h-[245px]" />
                </div>
                <div className="flex flex-col items-center justify-start w-[67%] gap-2">
                    <Text size="md" as="p" className="!text-gray-800 text-center line-clamp-3">
                        {props.productTitle}
                    </Text>
                    <Text as="p" className="font-medium">
                        {props.price + " $"}
                    </Text>
                </div>
            </div>
        </Link>
    )
}