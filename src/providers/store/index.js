import { createContext } from "react";
import batataFrita from "../../images/batata_frita.jpg";
import caldoDeCana from "../../images/caldo_de_cana.jpg";
import feijoada from "../../images/feijoada.jpg";
import fileDeFrangoAMilanesa from "../../images/file_de_frango_a_milanesa.jpg";
import fileMignonGrelhado from "../../images/file_mignon_grelhado.jpg";
import frangoXadrez from "../../images/frango_xadrez.jpeg";
import guisado_de_carne from "../../images/guisado_de_carne.jpg";
import hamburguerBatataFrita from "../../images/lasanha.jpg";
import lasanha from "../../images/lasanha.jpg";
import macarrao from "../../images/macarrao.jpg";
import milkshakeDeMorango from "../../images/milkshake_de_morango.jpg";
import pastel from "../../images/pastel.jpg";
import sopa from "../../images/sopa.jpg";
import strogonoffDeFrango from "../../images/strogonoff_de_frango.jpg";
import tortaDeFrangoComCatupiry from "../../images/torta_de_frango_com_catupiry.jpg";
import tortaDeLimao from "../../images/torta_de_limao.jpg";

export const storeContext = createContext()

export const StoreProvider = ({children}) => {
    const foodList = [
        {
        "id": 0,
        "name": "Frango Xadrez",
        "image": frangoXadrez,
        "description": "Frango, Pimentão, Cenoura, Soja, Amendoim.",
        "price": 20
        },
        {
        "id": 1,
        "name": "Torta de limão",
        "image": tortaDeLimao,
        "description": "Ingredientes.",
        "price": 10
        },
        {
        "id": 2,
        "name" : "Guisado de carne",
        "image": guisado_de_carne,
        "description": "Ingredientes.",
        "price": 17   
        },
        {
        "id": 3,
        "name": "Filé mignon grelhado",
        "image": fileMignonGrelhado,
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 4,
        "name": "Filé de frango à milanesa",
        "image": fileDeFrangoAMilanesa,
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 5,
        "name": "Macarrão",
        "image": macarrao,
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 6,
        "name": "Caldo de cana 500ml",
        "image": caldoDeCana,
        "description": "Ingredientes.",
        "price": 8
        },
        {
        "id": 7,
        "name": "Hambúrguer e batata frita",
        "image": hamburguerBatataFrita,
        "description": "Ingredientes.",
        "price": 13
        },
        {
        "id": 8,
        "name": "Feijoada",
        "image": feijoada,
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 9,
        "name": "Torta de frango com catupiry",
        "image": tortaDeFrangoComCatupiry,
        "description": "Ingredientes.",
        "price": 17
        },
        {
        "id": 10,
        "name": "Lasanha",
        "image": lasanha,
        "description": "Ingredientes.",
        "price": 16
        },   
        {
        "id": 11,
        "name": "Strogonoff de frango",
        "image": strogonoffDeFrango,
        "description": "Creme de leite, frango, cogumelo, alho, cebola e maionese",
        "price": 16
        },
        {
        "id": 12,
        "name":"Batata frita",
        "image": batataFrita,
        "description": "Batata",
        "price": 7
        },
        {
        "id": 13,
        "name": "Sopa",
        "image": sopa,
        "description": "Ingredientes.",
        "price": 14
        },
        {
        "id": 14,
        "name": "Milkshake de morango",
        "image": milkshakeDeMorango,
        "description": "Ingredientes.",
        "price": 10
        },
        {
        "id": 15,
        "name": "Pastel",
        "image": pastel,
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