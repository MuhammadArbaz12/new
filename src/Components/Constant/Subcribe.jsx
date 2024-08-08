import React from 'react'
import "../Constant/Hero.css"
import Heading from './Heading/Heading'
import { MdOutlineMailOutline } from "react-icons/md";
const Subcribe = () => {
    return (
        <>
            <div className="subs-head">
                <Heading Heading={"Subscribe to our News Letter "} />
            </div>

            <div className="subs-container">
                <div className="email-icon">
                    <div className='icon'>
                        <MdOutlineMailOutline size={25} />
                    </div>

                    <div>
                        <input type="text" placeholder='Enter Email Address' />
                    </div>
                </div>
                <div className='sub-btn'>
                    <button>Subscribe</button>
                </div>

            </div>
        </>
    )
}

export default Subcribe
