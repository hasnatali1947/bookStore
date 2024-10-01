"use client"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Cards from '../cards.jsx/page';
import { useStateContext } from '../../context/stateContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./page.css"


const Freebooks = () => {

    const { getBook } = useStateContext()

    const CustomPrevArrow = (props) => (
        <div className="custom-prev-arrow" {...props}>
          {/* Custom content for the previous arrow */}
        </div>
      );
      
      const CustomNextArrow = (props) => (
        <div className="custom-next-arrow" {...props}>
           {/* Custom content for the next arrow */}
        </div>
      );


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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
      
  
    const filterData = getBook?.filter((data) => data.category === "Free")

    console.log(filterData);

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                    <p>
                        Unlock a world of knowledge without spending a dime! Browse our selection of free books, available for instant download. Whether you're expanding your library or looking for your next great read, enjoy these titles at no cost and start reading today!
                    </p>
                </div>
                {getBook ?
                    <div>
                        <Slider {...settings} className="custom-slider">
                            {filterData?.map((item) => (
                                <Cards item={item} key={item._id} />
                            ))}
                        </Slider>

                    </div>
                    :
                    <div style={{ fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        No books found
                    </div>
                }
            </div>
        </>
    );
}

export default Freebooks;
