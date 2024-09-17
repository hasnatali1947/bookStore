"use client"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Cards from '../cards.jsx/page';
import { useStateContext } from '../../context/stateContext';

const Freebooks = () => {

    const { getBook } = useStateContext()

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                        corporis nulla non suscipit, iure neque earum?
                    </p>
                </div>
                {getBook ?
                    <div>
                        <Slider {...settings}>
                            {filterData?.map((item) => (
                                <Cards item={item} key={item._id} />
                            ))}
                        </Slider>
                    </div>
                    :
                    <div style={{fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        No books found
                    </div>
                }
            </div>
        </>
    );
}

export default Freebooks;
