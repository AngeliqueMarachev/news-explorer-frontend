import React from "react";
import './Hero.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
export default function Hero() {
    return (
        <div className="hero">
            <Navigation />
            <Header />
        </div>
    )

}
