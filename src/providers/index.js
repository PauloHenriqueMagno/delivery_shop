import { CartProvider } from "./cart"
import { ProfileProvider } from "./profile"
import { StoreProvider } from "./store"

export const Providers = ({children}) => {
    return (
        <StoreProvider>
            <ProfileProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </ProfileProvider>
        </StoreProvider>
    )
}