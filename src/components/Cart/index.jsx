import { FoodList } from "../styled"
import ShowFoodList from "../ShowFoodList";
import { useContext } from "react";
import { cartContext } from "../../providers/cart";
import SubTotal from "../SubTotal";

const Cart = () =>{
    const { cart } = useContext(cartContext)

    return (
    <>
        <FoodList>
            {
                cart.length>0?
                cart.map( product => ShowFoodList(product, true))
                :
                <h3 className="Alert">Carrinho vazio</h3>
            }
        </FoodList>
        <SubTotal />
    </>
    )
}

export default Cart;