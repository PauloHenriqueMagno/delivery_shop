import { Button } from "@material-ui/core"
import { useContext } from "react";
import { ThemeProvider } from '@material-ui/core'
import { cartContext } from "../../providers/cart";
import { BillTotal, theme, Container } from "../styled"
import { profileContext } from "../../providers/profile";
import { toast } from "react-toastify";
import reduceTotal from "../reduceTotal";
import { useHistory } from "react-router-dom"

const SubTotal = () => {
    const { cart, clearCart } = useContext(cartContext)
    const { saveOrder } = useContext(profileContext)
    const history = useHistory()

    const order = () => {
        const profile = JSON.parse(localStorage.getItem("@Delivery:profile"))

        if(!!profile===false){
            history.push("/login");
            toast.info("É necessario estar em uma conta para fazer uma compra");
            return
        }

        saveOrder(cart)
        clearCart()
        toast.success("Pedido realizado com sucesso", {position:"top-center"})
    }

    return (
        <BillTotal>
            <Container className="container">
                <p>Subtotal: R$ {reduceTotal(cart).toFixed(2)}</p>
                <ThemeProvider theme={theme}>

                    <Button
                        onClick={()=> order()}
                        variant="contained"
                        color="green"
                        disabled={cart.length===0}
                    >
                        Finalizar compra
                    </Button>

                </ThemeProvider>
            </Container>
        </BillTotal>
    )
}
export default SubTotal;