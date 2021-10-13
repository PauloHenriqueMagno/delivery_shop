import { useContext } from 'react';
import { storeContext } from '../../providers/store/index.js';
import { FoodList } from '../styled/index.js';
import ShowFoodList from '../ShowFoodList/index.jsx';
import SubTotal from '../SubTotal/index.jsx';

const Menu = () =>{
    const { foodList } = useContext(storeContext)

    return (
        <>
            <FoodList>
                {foodList.map(product => ShowFoodList(product, false))}
            </FoodList>
            <SubTotal />
        </>
    )
}

export default Menu;