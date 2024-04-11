import React, { useState } from 'react';
import "./Hero.css"
import Carousel from "../carousel/carousel"

function Hero(){
    function checkEmpty(){

    }
    return (
        <div className = "content">
            <div className = "left-div">
                <div className = "header-main">
                    <div className = "light-background-hero"></div>
                    <h1>Content Platform For Experts</h1>
                </div>
                <div className = "header-info">
                    <p>ContentBlocks is a SaaS platform dedicated to rethinking traditional marketing strategies. Our mission is to empower online marketers by providing an intuitive page-building experience focused on improving business outcomes.</p>
                </div>
                <div className = "sub-div">
                    <div className = "input-bar">
                        <form id="form" autoComplete="off">
                                <input
                                    type="email"
                                    id="email-id"
                                    name="email_address"
                                    aria-label="email adress"
                                    placeholder="example@domain.com"
                                    required
                                    onInput={checkEmpty()} />
                        </form>
                    </div>
                    <div className = "subscribe">
                        <button type="submit" className="btn" aria-label="submit">
                            <span>Subscribe</span>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div className = "right-div">
                <div>
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    )
}
export default Hero