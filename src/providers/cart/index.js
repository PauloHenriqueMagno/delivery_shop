import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

export const cartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([])
        localStorage.setItem("@Delivery:cart", JSON.stringify([]))
    }

    const addToCart = (product) => {
        const isSome = cart.some( prod => prod.id === product.id );
        
        if(!isSome){
            product["amount"] = 1
            localStorage.setItem("@Delivery:cart", JSON.stringify([...cart, product]))
            setCart([...cart, product]);
            toast.success("Adicionado ao carrinho");
        }
        if(isSome){
            const filter = cart.map(prod => {
                if(prod.id === product.id){
                    if(prod.amount<99){
                        prod.amount++
                        toast.success("Adicionado ao carrinho");
                    }else{
                        toast.error("Quantidade máxima atingida");
                    }
                }
                return prod
            })

            localStorage.setItem("@Delivery:cart", JSON.stringify(filter))
            setCart(filter);
        }
    }

    const removeFromCart = (product) => {
        const filter = cart.filter( prod => prod.id !== product.id )

        toast.success("Removido do carrinho");

        localStorage.setItem("@Delivery:cart", JSON.stringify(filter))
        setCart(filter)
    }

    const setProductAmount = (product, value) => {
        if(value.match(/[0-9]$/g)){
            if(value > 99){
                value = 99
            }
            if(value < 1){
                value = 1
            }

            const map = cart.map(prod => {
                if(prod.id===product.id){
                    prod.amount = Math.round(value)
                }
                return prod
            })
            localStorage.setItem("@Delivery:cart", JSON.stringify(map))
            setCart(map)
        }
        if(value === ""){
            const map = cart.map(prod => {
                if(prod.id===product.id){
                    prod.amount = 1
                }
                return prod
            })

            setCart(map)

            localStorage.setItem("@Delivery:cart", JSON.stringify(map))
        }
    }

    const addButton = (product) =>{
        const map = cart.map(prod => {
            if(prod.id === product.id){
                if(prod.amount<99){
                    prod.amount++
                }
                else{
                    toast.error("Quantidade máxima atingida");
                }
            }
            return prod
        })

        setCart(map)
        localStorage.setItem("@Delivery:cart", JSON.stringify(map))
    }

    const removeButton = (product) =>{
        const map = cart.map(prod => {
            if(prod.id === product.id){
                if(prod.amount>0){
                    prod.amount--
                }
            }
            return prod
        })
        const filter = map.filter(prod => prod.amount>0)

        if(map.length>filter.length){
            toast.success("Removido do carrinho");
        }
        setCart(filter)
        localStorage.setItem("@Delivery:cart", JSON.stringify(filter))
    }

    useEffect(()=>{
        const cartLocal = JSON.parse(localStorage.getItem("@Delivery:cart"))
        if(!!cartLocal){
            setCart(cartLocal)
        }
    },[])

    return (
        <cartContext.Provider 
            value={{
                cart,
                addToCart,
                removeFromCart,
                setProductAmount,
                addButton,
                removeButton,
                clearCart
            }}>
            {children}
        </cartContext.Provider>
    )
}