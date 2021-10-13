import { createContext } from "react";

export const storeContext = createContext()

export const StoreProvider = ({children}) => {
    const foodList = [
        {
        "id": 0,
        "name": "Frango Xadrez",
        "image": "http://www.receitaspratos.com/wp-content/uploads/2018/12/4f92d6daa92d6a21f63648f9417228ae-890x606.jpeg",
        "description": "Frango, Pimentão, Cenoura, Soja, Amendoim.",
        "price": 20
        },
        {
        "id": 1,
        "name": "Torta de limão",
        "image": "https://c.pxhere.com/photos/7a/be/caipirinha_muffins_cake_cream_lime_mint_cupcake_sweet-1027034.jpg!d",
        "description": "Ingredientes.",
        "price": 10
        },
        {
        "id": 2,
        "name" : "Guisado de carne",
        "image": "https://c.pxhere.com/photos/48/a7/beef_stew_green_leafy_vegetables_beef_food_main_dish_dish-978176.jpg!d",
        "description": "Ingredientes.",
        "price": 17   
        },
        {
        "id": 3,
        "name": "Filé mignon grelhado",
        "image": "https://c.pxhere.com/photos/dd/6f/food_dining_fine_meat_meal_plate_gourmet_restaurant-1202495.jpg!d",
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 4,
        "name": "Filé de frango à milanesa",
        "image": "https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_1280.jpg",
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 5,
        "name": "Macarrão",
        "image": "https://c.pxhere.com/photos/df/07/tofu_bolognese_noodles_tricolor_meatless_vegan_food_tomato_sauce-885438.jpg!d",
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 6,
        "name": "Caldo de cana 500ml",
        "image": "https://hiperfm.com.br/wp-content/uploads/2019/01/beneficios_do_caldo_de_cana.jpg",
        "description": "Ingredientes.",
        "price": 8
        },
        {
        "id": 7,
        "name": "Hambúrguer e batata frita",
        "image": "https://c.pxhere.com/photos/e7/71/hamburger_cheeseburger_burger_fries_french_fries_fast_food_junk_food_mc_donald's-1114777.jpg!d",
        "description": "Ingredientes.",
        "price": 13
        },
        {
        "id": 8,
        "name": "Feijoada",
        "image": "https://www.sabornamesa.com.br/media/k2/items/cache/0f18514092300971a1d9467fe5706101_XL.jpg",
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 9,
        "name": "Torta de frango com catupiry",
        "image": "https://c.pxhere.com/images/8e/2b/13ac86712b6efa454a27950657f2-1620739.jpg!d",
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 10,
        "name": "Lasanha",
        "image": "https://c.pxhere.com/images/bb/d4/4649fbd80bb8e5b2d07f3a6658e6-1569333.jpg!d",
        "description": "Ingredientes.",
        "price": 16
        },   
        {
        "id": 11,
        "name": "Strogonoff de frango",
        "image": "https://4.bp.blogspot.com/-9gFQoJ4IlAE/WyLSu9fqNhI/AAAAAAAAND0/3Ab_DDh-CO0e7D3VWiND0MrkFLGt5nT-ACLcBGAs/w1200-h630-p-k-no-nu/strogonoff-de-frango.jpg",
        "description": "Creme de leite, frango, cogumelo, alho, cebola e maionese",
        "price": 16
        },
        {
        "id": 12,
        "name":"Batata frita",
        "image": "https://c.pxhere.com/photos/ac/1f/french_fries_salt_food-698965.jpg!d",
        "description": "Batata",
        "price": 7
        },
        {
        "id": 13,
        "name": "Sopa",
        "image": "https://c.pxhere.com/images/49/25/4e754bdcec7b1d3c2192740f0c7d-1641287.jpg!d",
        "description": "Ingredientes.",
        "price": 14
        },
        {
        "id": 14,
        "name": "Milkshake de morango",
        "image": "https://c.pxhere.com/photos/b0/60/milkshake_beverage_strawberry_drink_food_healthy_smoothie_shake-678985.jpg!d",
        "description": "Ingredientes.",
        "price": 10
        },
        {
        "id": 15,
        "name": "Pastel",
        "image": "https://c.pxhere.com/photos/e4/55/meal_dinner_food_plate_lunch_dish_chicken_eating-1185203.jpg!d",
        "description": "Ingredientes.",
        "price": 8
        }
    ]

    return (
        <storeContext.Provider value={{foodList}}>
            {children}
        </storeContext.Provider>
    )
}