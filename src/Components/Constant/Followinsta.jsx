import React from 'react'
import "../Constant/Hero.css"
import Heading from './Heading/Heading'
import { Images } from '../../Utils/Images'

const Followinsta = () => {
    return (
        <>


            <Heading Heading={"Follow Us Instagram"} />


            <div className="follow-container">
                <div className="followimg">
                    <img src={Images.followimg1} alt="" />
                </div>
                <div className="followimg">
                    <img src={Images.followimg2} alt="" />
                </div>
                <div className="followimg">
                    <img src={Images.followimg3} alt="" />
                </div>
            </div>
        </>
    )
}

export default Followinsta

