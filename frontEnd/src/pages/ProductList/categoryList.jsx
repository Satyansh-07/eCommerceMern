import CategoryConstants from '../../constants/categoryConstants';
import Category from './category';


export default function CategoryList(props){
    return(
        <div className="flex flex-col items-start justify-start w-full gap-[31px]">
            {(parseInt(props.id) === 0) ? Object.values((CategoryConstants || {}).categoryID).map((category, index) => 
            <Category key={index} imgSrc={category.imgUrl} name={category.name} />)
            : Object.values((CategoryConstants || {}).categoryID).map((category, index) => {
                if(category.id === parseInt(props.id)){
                    return <Category key={index} imgSrc={category.imgUrl} name={category.name} />
                }
            })}
        </div>
    )
}       