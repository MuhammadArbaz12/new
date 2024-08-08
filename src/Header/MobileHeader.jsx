import React, { useState } from 'react'
import { Images } from '../Utils/Images';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { FaBlog } from "react-icons/fa6";
import { MdOutlineExpandMore } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";
import { BiWindowClose } from "react-icons/bi";



const MobileHeader = () => {
    const [MobileHeader, SetMobileHeader] = useState(false)

    const OpenHeader = () => {
        SetMobileHeader(true)
    }
    const CloseHeader = () => {
        SetMobileHeader(false)
    }
    return (
        <>
            <div className="mobilenav">
                <div className="mobilecontent">
                    <div className="logo">
                        <img src={Images.logo} alt="" />
                    </div>
                    <div className="mobile-header-toggle">
                        {
                            MobileHeader ? <>
                                <button onClick={CloseHeader}><span><BiWindowClose size={35} /></span></button></> : <>
                                <button onClick={OpenHeader}>
                                    <RiMenuFill size={25} color='#40403F' />

                                </button>
                            </>
                        }
                    </div>

                </div>
                {
                    MobileHeader ? <>
                        <div className="mobile-nav-route">
                            <ul>
                                <li>
                                    <Link to="/"> <span><IoHome size={25} /></span> Home </Link>

                                </li>
                                <li>
                                    <Link to="/Product"> <span><MdOutlineLocalGroceryStore size={25} /></span> Store</Link>

                                </li>
                                <li>
                                    <Link to="/About"> <span><MdContactSupport size={25} /></span> About</Link>

                                </li>

                                <li>
                                    <Link to="/Contact"> <span><FaBlog size={25} /></span> Blogs</Link>

                                </li>

                                <li>
                                    <Link to="/Contact"> <span><MdOutlineExpandMore size={25} /></span> More</Link>

                                </li>

                            </ul>
                            <div className="mobile-button">
                                <button className='login-btn'>Login</button>
                                <button className='sign-btn'>Sign Up</button>
                            </div>
                        </div>


                    </> : <>
                    </>

                }


            </div >


        </>
    )
}

export default MobileHeader
