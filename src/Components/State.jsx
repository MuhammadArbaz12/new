import React from 'react'
import "../Components/Constant/Hero.css"
import { Images } from '../Utils/Images'

const State = () => {
    return (
        <>
            <div className="state-container">
                <div className="state-content">
                    <div>
                        <img src={Images.stateimg1} alt="" />
                    </div>

                    <div>
                        <p className='para-01'>Free Delivery</p>
                        <p className='L-para-01'>Free Shipping for order above 3,000 Rupee</p>
                    </div>
                </div>
                <div className="state-content">
                    <div>
                        <img src={Images.stateimg2} alt="" />
                    </div>

                    <div>
                        <p className='para-02'>Flexible Payment</p>
                        <p className='L-para-02'>Multiple Secure Payment Options</p>
                    </div>
                </div>
                <div className="state-content">
                    <div>
                        <img src={Images.stateimg3} alt="" />
                    </div>

                    <div>
                        <p className='para-03'>24 x 7 Support</p>
                        <p className='L-para-03'>We Support Online all Days</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default State
