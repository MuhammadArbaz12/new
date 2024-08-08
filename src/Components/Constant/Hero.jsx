import React from 'react'
import "../Constant/Hero.css"
import { BsBagCheck } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { Images } from '../../Utils/Images';
import { useTypewriter, Cursor } from 'react-simple-typewriter'



const Hero = () => {
    const [text] = useTypewriter({
        words: ['Discover, Shop, and Elevate Fast with'],

    })
    return (
        <>
            <div className="main-container">
                <div className="main-content">
                    <h1>
                        <span>{text}</span> <Cursor cursorColor='#00B0B0' />

                    </h1>


                    <h3>Swift Invents!</h3>
                    <p>Ignite Your Passion, Shop Intelligently, and Elevate Your Everyday Fueling Your Drive for Quality Products and Services That Enhance Your Life</p>
                    <div className="submit-btn">
                        <button className='shop'> <span><BsBagCheck /></span>Shop</button>
                        <button className='explore'>Explore Product<span><MdArrowOutward />
                        </span></button>
                    </div>

                    <div className="hero-img">
                        <img src={Images.Frameimg} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
