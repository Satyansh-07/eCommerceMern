import { selectorFamily } from "recoil";


// this selector is used to fetch the data for product listing page
// fetches the initial list of products to be displayed based on ID
export const productListingSelector = selectorFamily({
    key: "ProductListingSelector",
    get: (id) => async () => {
        try{
            let data, response;
            if(!!id){
                data = await fetch("http://localhost:1338/category/" + id);
            }
            else{
                data = await fetch('http://localhost:1338/category/0');
            }
            response = await data.json();
            return response;
        }
        catch(err){
            console.log('Error found', err);
        }
    }
});

//