import { Link } from "react-router-dom";
import { Text, Img, Button} from "../../components";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard(props){
    const [defaultBtnContent, setButtonContent] = useState({value: "Add to cart", isRedirect: false});
    const navigate = useNavigate();
    function changeButtonTextFnc(){
        if(!(defaultBtnContent || {}).isRedirect){
            setButtonContent({value: "Go to cart", isRedirect: true});
        }
        else{
            navigate("/cart")
        }
    }
    return(
        <div className="flex flex-col items-center justify-start w-full gap-4 relative mt-8">
            <Link to={"/productdetails/" + props.pid} className="flex flex-col items-center after:content-[''] after:top-0 
            after:absolute after:right-0 after:left-0 after:bottom-0">
                <div className="max-h-[300px] max-w-[245px]">
                    <Img src={props.productImage} alt="green_warm" className="h-[245px]" />
                </div>
                <div className="flex flex-col items-center justify-start w-[67%] gap-2">
                    <Text size="md" as="p" className="!text-gray-800 text-center line-clamp-3 h-[100px]">
                        {props.productTitle}
                    </Text>
                    <Text as="p" className="font-medium">
                        {props.price + " $"}
                    </Text>
                </div>
            </Link> 
            <Button className="p-4 text-sm text-white-A700 bg-gray-800 relative z-10" onClick={changeButtonTextFnc}>{(defaultBtnContent || {}).value}</Button>
        </div>
    )
}