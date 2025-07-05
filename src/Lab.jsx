import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { CartProvider } from "./ReusableComponent/CartContext";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MiniLab from "./MiniLab";
import AuthContext from "./UI/AuthenticationComponent/AuthContext";

const ScrollToTop=()=>{
    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);

    },[pathname]);
    return null;
};



function Lab() {

    return (
        <CartProvider>
            <BrowserRouter>
            <ScrollToTop/>
            <AuthContext>
                <MiniLab/>
            </AuthContext>
            </BrowserRouter>
        </CartProvider>
    );
}

export default Lab;
