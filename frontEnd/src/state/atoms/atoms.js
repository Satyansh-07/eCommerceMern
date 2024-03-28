import {atom, atomFamily} from 'recoil';

export const CartItemCount = atom({
    key: "CartItemCount",
    default: 0
})

export const ProductCardState = atomFamily({
    key: "ProductCardFamily",
    default: {
        value: "Add to cart", 
        isRedirect: false
    }
})