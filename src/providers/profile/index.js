import { createContext, useEffect, useState } from "react";

export const profileContext = createContext()

export const ProfileProvider = ({children}) =>{

    const [logged, setLogged] = useState(false);

    const verifyProfile = (profile) => {
        const users = JSON.parse(localStorage.getItem("@Delivery:users"));

        if(!!users){
            const some = {
                "nickname": users.some(user => user.nickname === profile.nickname),
                "email": users.some(user => user.email === profile.email)
            }

            return some
        }
        return { "nickname": false, "email": false};
    }

    const saveProfile = (data) => {
        const users = JSON.parse(localStorage.getItem("@Delivery:users"));

        if(!!users){
            localStorage.setItem("@Delivery:users", JSON.stringify([...users, {...data, "orders": []}]));
        }
        else{
            localStorage.setItem("@Delivery:users", JSON.stringify([{...data, "orders": []}]));
        }
    }

    const loginProfile = (profile) => {
        setLogged(true);
        localStorage.setItem("@Delivery:profile", JSON.stringify(profile));
    }

    const logOutProfile = () => {
        setLogged(false)
        localStorage.removeItem("@Delivery:profile")
    }

    const saveOrder = (cart) => {
        const profile = JSON.parse(localStorage.getItem("@Delivery:profile"))
        const profiles = JSON.parse(localStorage.getItem("@Delivery:users"))

        profile.orders = [...profile.orders, cart]
        localStorage.setItem("@Delivery:profile", JSON.stringify(profile))

        profiles.map(user => {
            if(user.nickname === profile.nickname){
                user.orders = [...user.orders, cart]
            }

            return user
        })
        localStorage.setItem("@Delivery:users", JSON.stringify(profiles))
    }

    useEffect(()=>{
        const getProfile = JSON.parse(localStorage.getItem("@Delivery:profile"))

        if(!!getProfile){
            setLogged(true)
        }
    }, [])

    return (
        <profileContext.Provider
            value={{
                logged,
                verifyProfile,
                loginProfile,
                logOutProfile,
                saveProfile,
                saveOrder
            }}
        >
            {children}
        </profileContext.Provider>
    )
}