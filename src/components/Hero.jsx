import React from "react"
import "./../App.css"

const Hero = () =>{
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>

                <p>
                    YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="hero-btn">
                    <button className="login">Shop Now</button>
                    <button className="catogery">Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on </p>

                    <div className="brand-icon">
                        <img src="/images/flipkart.png" alt="flipkart" />
                        <img src="/images/amazon.png" alt="amazon" />
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="shoe_image" />
            </div>
        </main>
    )

}

export default Hero
