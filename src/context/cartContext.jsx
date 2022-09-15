import { Children, createContext } from "react"

export const CartContext = createContext ();
const CartProvider = ({children})=>{
    return(
        <CartProvider>
            {children}
        </CartProvider>

    )
};

export default CartProvider;


