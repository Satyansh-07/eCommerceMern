import {useState, useEffect } from "react";
import ProductCard from '../../components/productCard.jsx';
import { useParams } from "react-router-dom";


export default function ProductListing(){
    const [productList, setProductList] = useState([]);
    const {id} = useParams();
    let data;
    let response;
    useEffect(() => {
        async function fetchProductList(){
        try{
            if(!!id){
            data = await fetch("http://localhost:1338/category/" + id);
            }
            else{
            data = await fetch('http://localhost:1338/category/0');
            }
            response = await data.json();
            setProductList(response);
        }
        catch(err){
            console.log('Error found', err);
        }
        }
        fetchProductList();
    }, [])
    return(
        <div className="justify-center w-full gap-8 grid-cols-3 grid min-h-[auto]">
            {(productList || []).map((product, index) => <ProductCard key={index} productImage={(product || {}).image} productTitle={(product || {}).title} price={(product || {}).price} pid={(product || {}).id}/>)}
        </div>
    )
}