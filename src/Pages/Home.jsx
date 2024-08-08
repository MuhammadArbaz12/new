import React from 'react'
import Hero from '../Components/Constant/Hero'
import State from '../Components/State'
import Categories from '../Components/Categories/Categories'
import Product from '../Components/Product'
import LimetedOffer from '../Components/Constant/LimetedOffer'
import Followinsta from '../Components/Constant/Followinsta.jsx'
import Introduction from '../Components/Constant/Introduction.jsx'
import Faqs from '../Components/Constant/Faqs.jsx'
import Subcribe from '../Components/Constant/Subcribe.jsx'
import Footer from '../Components/Constant/Footer.jsx'

const Home = () => {
    return (
        <>
            <Hero />
            <State />
            <Categories />
            <Product />
            <LimetedOffer />
            <Followinsta />
            <Introduction />
            <Faqs />
            <Subcribe />
            <Footer/>
        </>
    )
}

export default Home