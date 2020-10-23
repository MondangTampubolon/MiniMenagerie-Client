import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [items, setitems] = useState([]);

    function addToCart(item) {
        setitems((prevState) => [...prevState, item]);
    }

    function itemsWithQuantities(items) {
        return items.reduce((acc, item) => {
            const found = acc.find((_item) => _item.price === item.price);
            if (found) {
                found.quantity = found.quantity + 1;
            } else {
                acc.push({
                    quantity: 1,
                    ...item,
                });
            }
            return acc;
        }, []);
    }

    return (
        <CartContext.Provider
            value={{
                items: itemsWithQuantities(items),
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
