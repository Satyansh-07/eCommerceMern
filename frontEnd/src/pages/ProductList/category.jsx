import { Text, Img } from "../../components"

export default function Category(props){
    return(
        <div className="flex flex-row justify-start items-center gap-4 cursor-pointer">
            <Img src={props.imgSrc + '.svg'} alt="sweater_one" className="h-8 w-8" />
            <Text as="p">{props.name}</Text>
        </div>
    )
}