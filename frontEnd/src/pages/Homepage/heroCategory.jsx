import { Text, Img} from "../../components";
import { Link } from 'react-router-dom';


export default function HeroCategory(props){
    return(
        <Link to={"/productList/" + props.catID}>
            <div className="flex flex-col items-center justify-start h-[120px] w-36 cursor-pointer">
                <div className="flex flex-col items-center justify-center bg-white-A700">
                    <div className="flex flex-col items-center justify-start w-[58%] gap-[7px]">
                        <Img src={'images/' + props.catImage + '.svg'} alt="shirt_one" className="h-12 w-12" />
                        <Text as="p" className="!text-blue_gray-100 text-center">
                            {props.categoryName}
                        </Text>
                    </div>
                </div>
            </div>
        </Link>
    )
}