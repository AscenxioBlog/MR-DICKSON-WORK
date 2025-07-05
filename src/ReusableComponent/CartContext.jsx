import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        // Load cart from localStorage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // const addToCart = (product,onSuccess) => {
    //     setCart((prevCart) => {
    //         const existingProduct = prevCart.find((item) => item.id === product.id);
    //         if (existingProduct) {
    //             // Increment quantity if product already in cart
    //             return prevCart.map((item) =>
    //                 item.id === product.id
    //                     ? { ...item, quantity: item.quantity + 1 }
    //                     : item
    //             );
    //         }
    //         return [...prevCart, { ...product, quantity: 1 }];

    //     });
    //     if (onSuccess) onSuccess(product);
    // };

    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item._id === product._id);
          if (existingProduct) {
            return prevCart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      };
      
      const removeFromCart = (productToRemove) => {
        setCart((prevCart) =>
          prevCart.filter((item) => item._id !== productToRemove._id)
        );
      };
      
      const increaseQuantity = (product) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      };
      
      const decreaseQuantity = (product) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item
          )
        );
      };
      

    // const removeFromCart = (productId) => {
    //     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    // };

    // const updateQuantity = (productId, quantity) => {
    //     setCart((prevCart) =>
    //         prevCart.map((item) =>
    //             item.id === productId ? { ...item, quantity } : item
    //         )
    //     );
    // };

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0)
 
  

    return (
        <CartContext.Provider value={{ cart,cartCount, addToCart, removeFromCart,decreaseQuantity, increaseQuantity  }}>
            {children}
        </CartContext.Provider>
    );
}
