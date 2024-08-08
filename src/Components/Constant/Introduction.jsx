import React from 'react'
import { Images } from '../../Utils/Images'
import { IoMdArrowForward } from "react-icons/io";
const Introduction = () => {
    return (
        <>
            <div className="intro-container">
                <div className="intro-img">
                    <img src={Images.introimg} alt="" />
                </div>
                <div className="intro-tech">
                    <div className="intro-log">
                        <img src={Images.intrologoimg} alt="" />
                    </div>
                    <div className="intro-swift">
                        <h2>Introduction to Swift Techs</h2>
                        <p>
                            Welcome to Swift Techs, your one-stop tech solution! Our experts deliver top-notch web design, development, and backend services using cutting-edge technologies like MERN, Java, and PHP. Trust us for robust, scalable solutions that drive innovation and growth
                        </p>
                        <button>Explore <IoMdArrowForward /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction
