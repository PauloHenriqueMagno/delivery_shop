import { Switch, Route } from "react-router-dom"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Cart from "../components/Cart"
import { Container } from "../components/styled"
import { ToastContainer } from "react-toastify"
import SignUp from "../pages/SignUp"
import LogIn from "../pages/LogIn"
import Account from "../pages/Account"

const Routes = () => {
    return (
        <>
            <Header />
            <Container>
                <Switch>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/account/cart">
                        <Cart />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/">
                        <Menu />
                    </Route>
                </Switch>
            </Container>

            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />
        </>
    )
}

export default Routes;