import React from 'react'
import Heading from './Heading/Heading'
import "../Constant/Hero.css"
import { Images } from '../../Utils/Images'
const LimetedOffer = () => {
    return (
        <>
        <div className='limited-head'>
        <Heading Heading={"Limited Time Offer"} />
        </div>
            <div className="limited-time">
                <div className="large-offer">
                    <img  src={Images.shoesimg} alt="" />
                    <div className="limited-card">
                        <h3>Nike Shoe</h3>
                        <p>Rs: 1920 <del>Rs: 2000</del></p>
                    </div>
                    <div className="limited-btn">
                        <button>29 : 23 : 00</button>
                    </div>
                </div>
                <div className="md-offer">
                    <div className="md-01">
                        <div className="limited-time">
                            <img className='Limted-offer-img' src={Images.motoroilimg} alt="" />
                        </div>
                        <div className="limited-card2">
                            <h3>Mobil Super Collection</h3>
                            <p>Rs: 1920 <del>Rs: 2000</del></p>
                        </div>
                    </div>
                    <div className="md-02">
                        <div className="limited-time">
                            <img className='Limted-offer-img' src={Images.suzukiimg} alt="" />
                        </div>
                        <div className="limited-card2">
                            <h3>Nike Shoe</h3>
                            <p>Rs: 1920 <del>Rs: 2000</del></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LimetedOffer
