import React from 'react'
import "../Constant/Hero.css"
import Slider from "react-slick";
import { Images } from '../../Utils/Images';
import Heading from '../Constant/Heading/Heading';
import Marquee from "react-fast-marquee";
const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <Marquee
        speed={200}
        gradient={true}
        gradientColor={"gray"}
        gradientWidth={400}
      >
        <h1 style={
          {
            fontSize: 70,
            fontFamily: "sans-serif",
            color: "#00B0B0",

          }
        }>Swift Invents &nbsp;Swift Invents &nbsp;Swift Invents &nbsp;Swift Invents &nbsp;Swift Invents &nbsp;Swift Invents &nbsp;</h1>
      </Marquee>
      <Heading Heading={"Shop By Categories"} />

      <div className="slider-container">
        <Slider {...settings}>

          <div className='card-img'>
            <img src={Images.menimg} alt="" />
          </div>

          <div className='card-img'>
            <img src={Images.womenimg} alt="" />
          </div>

          <div className='card-img'>
            <img src={Images.oilimg} alt="" />
          </div>

        </Slider>
      </div>
    </>
  )
}

export default Categories

