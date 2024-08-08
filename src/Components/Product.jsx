import React from 'react'
import "../Components/Constant/Hero.css"
import { Images } from '../Utils/Images'
import Heading from './Constant/Heading/Heading'
const Product = () => {

    const Productcat = ({ IMG, description, price }) => {
        return (
            <>
                <div className="product-main">
                    <div className="content-pro">
                        <img src={IMG} alt="" />
                        <h1> {description} </h1>
                        <p> {price} </p>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>

            <div className='Pro-head'>
                <Heading Heading={"Popular Products"} />
            </div>

            <div className='product-main'>
                <Productcat IMG={Images.proimg01} description={"T Shirt"} price={"Rs: 1920"} />
                <Productcat IMG={Images.proimg02} description={"Nike Shoe"} price={"Rs: 1920"} />
                <Productcat IMG={Images.proimg03} description={"Ronin Watch"} price={"Rs: 1920"} />
                <Productcat IMG={Images.proimg04} description={"2 Piece Suit"} price={"Rs: 1920"} />

            </div>
            <div className='product-main'>
                <Productcat IMG={Images.proimg05} description={"T Shirt"} price={"Rs:500"} />
                <Productcat IMG={Images.proimg06} description={"Nike Shoe"} price={"Rs:500"} />
                <Productcat IMG={Images.proimg07} description={"Motor Oil"} price={"Rs:500"} />
                <Productcat IMG={Images.proimg08} description={"Liquid Polish"} price={"Rs:500"} />

            </div>

        </>
    )
}

export default Product
