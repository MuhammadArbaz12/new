import React from 'react'
import "../Constant/Hero.css"
import { Images } from '../../Utils/Images'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-invents">
                    <div>
                        <img src={Images.footerimg} alt="" />
                    </div>
                    <div>
                        <p>
                            We accept major credit cards, including Visa, Mastercard, and American Express, as well as PayPal.
                        </p>
                    </div>
                    <div className='footer-icon'>
                        <IoLogoYoutube size={25} />

                        <FaFacebook size={25} />
                        <FaInstagram size={25} />
                        <FaRegWindowClose size={25} />
                    </div>

                </div>
                <div className="company">
                    <div className="com-footer">
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                        <p>Products</p>
                    </div>
                    <div className="com-footer">
                        <h3>Customer Services</h3>
                        <p>My Account</p>
                        <p>Track your Order</p>
                        <p>Return</p>
                        <p>FAQ</p>
                    </div>
                    <div className="com-footer">
                        <h3>Our Information</h3>
                        <p>Privacy</p>
                        <p>User Terms & Conditions</p>
                        <p>Return Policy</p>

                    </div>
                    <div className="com-footer">
                        <h3>Contact info</h3>
                        <p>+92-317-2289093</p>
                        <p>example@gmail.com</p>
                        <p>Gulshan e Iqbal Nepa, </p>
                        <p>Karachi Pakistan</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
