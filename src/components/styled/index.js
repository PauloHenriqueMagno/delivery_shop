import styled from "styled-components"
import { keyframes } from "styled-components";
import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
        green: {
            main: "rgb(30,150,50)"
        },
        red: {
            main: "rgb(150,20,20)"
        },
        white: {
            main: "rgb(255, 255, 255)"
        },
        grey: {
            main: "rgb(150, 150, 150)"
        },
        bluePurple: {
            main: "rgb(111,102,242)"
        }
    }
})

const apearLeft = keyframes`
    0% {
        transform: translateX(-50%);
        opacity: 0.1;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`
const apearRight = keyframes`
    0% {
        transform: translateX(50%);
        opacity: 0.1;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 15px;
    margin: auto;
`

export const HeaderMain = styled.header`
    width: 100%;
    background-color: rgb(162, 91, 245);
    position: sticky;
    top: 0;
    z-index: 100;
    
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        
        h1{
            font-size: 1.3rem;
            cursor: pointer;
            color: rgb(255,255,255);
        }

        @media (min-width: 500px) {
            h1{
                font-size: 2rem;
            }
        }
    }
`

export const FoodList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 55px;

    .Alert {
        width: max-content;
        position: absolute;
        inset: 50%;
        transform: translate(-50%);
    }

    @media (min-width: 800px){
        grid-template-columns: 1fr 1fr;
    }
`

export const Food = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 10px 5px;
    border-top: 1px solid rgba(0,0,0,0.3);

    &:last-child{
        border-bottom: 1px solid rgba(0,0,0,0.3);
    }

    .food_details {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
    .food_info{
        flex-basis: 70%;
        width: 100%;
    }
    .food_image {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 30%;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
        }
    }
    .food_price_and_button {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;

        .food_button{
            svg {
                width: 35px;
                height: 35px;
            }
        }
    };
    .food_amount {
        margin: 2px 5px;
        display: grid;
        grid-template-columns: 30px 30px 30px;
        align-items: center;
        gap: 5px;

        input {
            width: 30px;
            height: min-content;
            font-size: 18px;
            text-align: center;
        }

        button{
            min-width: 100%;
            min-height: 100%;
            padding: 5px;

            svg {
                width: 40px;
                height: 40px;
            }
        }
    };

    @media (min-width: 800px){
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 5px;
        box-shadow: 0 0 3px rgba(0,0,0,0.2);
    }
`

export const BillTotal = styled.div`
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgb(162, 91, 245);
    
    .container {        
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    p {
        background-color: rgb(255,255,255);
        padding: 5px;
        border-radius: 3px; 
    }

    button {
        color: rgb(255,255,255)
    }
`

export const LogInSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px;
    
    p {
        text-align: end;
        
        span {
            color: rgb(0,0,0); 
            cursor: pointer;
            text-decoration: underline;
        }
    }

    svg {
        width: 50%;
        height: auto;
        margin: auto;
        animation: ${apearLeft} 1s
    }
    
    @media (min-width: 769px) {
        flex-direction: row;
        margin-top: 20px;
        
        svg {
            width: 100%;
            flex-basis: 60%;
            max-height: 70vh;
        }
    }
`

export const SignUpSection = styled.section`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 5px 15px 20px;
    
    p {
        text-align: start;

        span {
            color: rgb(0,0,0); 
            cursor: pointer;
            text-decoration: underline;
        }
    }

    svg {
        width: 50%;
        height: auto;
        margin: auto;
        animation: ${props => props.direction==="right"? apearRight: apearLeft} 1s
    }
    
    @media (min-width: 769px) {
        flex-direction: row;

        svg {
            width: 100%;
            flex-basis: 60%;
            max-height: 70vh;
        }
    }
`

export const Form = styled.form`
    animation: ${props => props.direction==="right"? apearRight: apearLeft} 1s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
    
    @media (min-width: 630px) {
        flex-basis: 40%;
    }
`

export const ProfileSection = styled.section`
    margin: 10px 0;

    h3 {
        margin: 25px 0 10px;
    }
`

export const ProfileOrders = styled.ul`
    display: flex;
    flex-direction: column-reverse;

    .order {
        display: flex;
        flex-direction: column;
        border: 2px solid rgba(0,0,0,0.3);
        border-radius: 5px;
        margin: 5px 0;

        header {
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.3);
            border-radius: 3px 3px 0 0;
            background-color: rgb(); 

            h3 {
                padding: 10px;
                margin: 0;
            }
        }

        main {
            margin: 10px 0;
        }

        .subTotal {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            padding: 5px 10px;
            background-color: rgb(0,150,0);
            border-radius: 0 0 3px 3px;
            
            span {
                display: block;
                min-width: 90px;
                margin-left: 10px;
                padding: 3px 4px;
                border: 1px solid rgb(0,0,0);
                text-align: end;
                background-color: rgb(255,255,255);
            }
        }
    }
    .product {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 7px 5px;

        .amount {
            min-width: 40px;
            text-align: end;
        }
        .name {
            padding-left: 10px;
            width: 100%;
        }
        .price {
            min-width: 70px;
            text-align: end;
            margin-right: 10px;
        }
    }
`