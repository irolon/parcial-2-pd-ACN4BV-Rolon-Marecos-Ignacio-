import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error('Error saving cart to localStorage:', error);
        }
    }, [cart]);

    const additem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.id === item.id && cartItem.cantidad < cartItem.stock) {
                    return { ...cartItem, cantidad: cartItem.cantidad + cantidad };
                }
                else {
                    alert("No hay suficiente stock disponible");
                    return cartItem;
                }
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const total =() => {
        return cart.reduce((acc, item) => acc += item.cantidad * item.precio, 0);
    };

    const cartQty = () => {
        return cart.reduce((acc, item) => acc += item.cantidad, 0);
    };

    return (<CartContext.Provider value={{cart, additem, removeItem, clearCart, isInCart, total, cartQty}}>
        {children}
    </CartContext.Provider>);
};