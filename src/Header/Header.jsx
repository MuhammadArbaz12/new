import React from 'react'

// import Icons
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

import "./Header.css"
import { Link } from 'react-router-dom'
import { Images } from '../Utils/Images'



const Header = () => {
    return (
        <>

            <nav>
                <div className="logo">
                    <img src={Images.logo} alt="" />
                </div>

               
                <div className="nav-links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>

                        </li>
                        <li>
                            <Link to="/Product">Store</Link>

                        </li>
                        <li>
                            <Link to="/About">About</Link>

                        </li>

                        <li>
                            <Link to="/Contact">Blogs</Link>

                        </li>

                    </ul>
                </div>
                <div className="icons">
                    <div className="cart">

                        <div>
                            <CiSearch size={25} />
                        </div>
                        <div>
                            <CiShoppingCart size={25} />
                        </div>
                        <div>
                            <FaUser size={25} />
                        </div>
                    </div>

                    <div className="cart-menu">
                        <p>Menu</p>
                        <div>
                            <FaBars size={25} />
                        </div>
                    </div>


                </div>
            </nav>

        </>
    )
}

export default Header