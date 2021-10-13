import { IconButton, ThemeProvider, Badge, Button, Menu, MenuItem } from "@material-ui/core"
import { Home, ShoppingCart, Person } from "@material-ui/icons"
import { useHistory } from 'react-router-dom'
import { useState, useContext } from "react"
import { Container, HeaderMain, theme } from "../styled"
import { cartContext } from "../../providers/cart"
import { profileContext } from "../../providers/profile"

const Header = () =>{
    const history = useHistory()

    const { cart } = useContext(cartContext)
    const { logged, logOutProfile } = useContext(profileContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        if(!logged){
            return redirect("/login")
        }
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const redirect = link => history.push(link)

    const cartLength = () => {
        if(cart.length!==0){
            let total = 0;
            cart.forEach(prod=> { total += prod.amount })
            return Math.round(total)
        }
        else{
            return 0
        }
    }

    const getOut = () =>{
        logOutProfile();
        handleClose();
        redirect("/")
    }

    return (
        <HeaderMain>
            <Container className="container">
                <h1 onClick={()=>redirect("/")}>Delivery</h1>

                <nav>
                    <ThemeProvider theme={theme}>
                        <IconButton onClick={()=>redirect("/")} color="white">
                            <Home />
                        </IconButton>
                        <Button
                            onClick={handleClick}
                            color="white"
                        >
                            <Person />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem
                                onClick={() => {handleClose(); redirect("/account")}}
                            >
                                Meus pedidos
                            </MenuItem>
                            <MenuItem
                                onClick={getOut}
                            >
                                Sair
                            </MenuItem>
                        </Menu>
                        <Badge 
                            badgeContent={cartLength()}
                            color="bluePurple"
                            max={99}
                            sx={{color: "rgb(255,255,255)"}}
                        >
                            <IconButton onClick={()=>redirect("/account/cart")} color="white">
                                <ShoppingCart />
                            </IconButton>
                        </Badge>
                    </ThemeProvider>
                </nav>
            </Container>
        </HeaderMain>
    )
}

export default Header;