import { IconButton, ThemeProvider } from '@material-ui/core'
import { AddShoppingCart, RemoveShoppingCart, AddBox, IndeterminateCheckBox } from '@material-ui/icons'
import 'react-toastify/dist/ReactToastify.css';
import { Food, theme } from '../styled';
import { useContext } from 'react';
import { cartContext } from '../../providers/cart';

const ShowFoodList = (food, removable) => {
    const {
        addToCart,
        removeFromCart,
        setProductAmount,
        addButton,
        removeButton
    } = useContext(cartContext)

    return (
        <Food key={food.id}>
            <div className="food_details">
                <div className="food_info">
                    <h3>{food.name}</h3>
                    <p>Ingredientes: {food.description}</p>
                </div>
                <div className="food_image">
                    <img src={food.image} alt={food.name} />
                </div>
            </div>
            <div className="food_price_and_button">
                <div className="food_price">
                    
                    {!removable && <p>R$&nbsp;{food.price.toFixed(2)}</p>}

                    {removable && <p>R$&nbsp;{(food.price*food.amount).toFixed(2)}</p>}

                </div>

                { removable &&
                    <div className="food_amount">
                        <ThemeProvider theme={theme}>
                            <IconButton onClick={()=> addButton(food)} color="green">
                                <AddBox />
                            </IconButton>
                            <input
                                type="text"
                                value={food.amount}
                                onChange={e => setProductAmount(food, e.target.value)}
                            />
                            <IconButton onClick={()=> removeButton(food)} color="red">
                                <IndeterminateCheckBox />
                            </IconButton>
                        </ThemeProvider>
                    </div>
                }

                <div className="food_button">
                    <ThemeProvider theme={theme}>
                        {
                            !removable &&
                            <IconButton onClick={()=> addToCart(food)} color="green">
                                <AddShoppingCart />
                            </IconButton>
                        }

                        {
                            removable &&
                            <IconButton onClick={()=> removeFromCart(food)} color="red">
                                <RemoveShoppingCart />
                            </IconButton>
                        }
                    </ThemeProvider>
                </div>
            </div>
        </Food>
    )
}

export default ShowFoodList;