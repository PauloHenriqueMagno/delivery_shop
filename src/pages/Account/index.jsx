import { useEffect } from "react";
import { useHistory } from "react-router";
import { ProfileOrders, ProfileSection } from "../../components/styled";
import reduceTotal from "../../components/reduceTotal"
 
const Account = () => {
    const history = useHistory()

    const Profile = JSON.parse(localStorage.getItem("@Delivery:profile"))

    useEffect(()=>{
        if(!!Profile===false){
            history.push("/login")
        }
    }, [Profile, history])

    const showOrders = (orders, index, array) => {
        return (
            <li className="order">
                <header>
                    <h3>#{index+1}&nbsp;pedido</h3>
                </header>
                <main>
                <ul>
                    {orders.map(order => {
                        return (
                            <li key={order.id} className="product">
                                <p className="amount">{order.amount}x</p>
                                <p className="name">{order.name}</p>
                                <p className="price">R$&nbsp;{order.price.toFixed(2)}</p>
                            </li>
                        )
                    })}
                </ul>
                </main>
                <footer>
                <p className="subTotal">Subtotal: <span>R$&nbsp;{reduceTotal(orders).toFixed(2)}</span></p>
                </footer>
            </li>
        )
    }

    return (
        <ProfileSection>
            <h2>Bem vindo, {Profile.nickname}</h2>

            <h3>Seus pedidos</h3>
            <ProfileOrders>
                {Profile.orders.map(showOrders)}
            </ProfileOrders>
        </ProfileSection>
    )
}

export default Account;