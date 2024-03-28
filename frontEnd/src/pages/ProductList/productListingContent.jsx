import { useRecoilValueLoadable } from 'recoil';
import { productListingSelector } from '../../state/selectors/selector';
import Loader from '../../components/Loader';
import ProductCard from '../../components/productCard.jsx';

export default function ProductListingContent({id}){
    const productListingValue = useRecoilValueLoadable(productListingSelector(id));
    if(productListingValue.state === 'loading'){
        return(
            <Loader />
        )
    }
    else if(productListingValue.state === 'hasValue'){
        return(
            <div className="justify-center w-full gap-8 grid-cols-3 grid min-h-[auto]">
                {(((productListingValue || {}).contents || []).productList || []).map((product, index) => <ProductCard key={index} productCardId={(product || {}).id} productImage={(product || {}).image} productTitle={(product || {}).title} price={(product || {}).price} pid={(product || {}).id}/>)}
            </div>
        )
    }
    else if(productListingValue.state === 'hasError'){
        return(
            <div>404 page should be displayed here</div>
        )
    }
}