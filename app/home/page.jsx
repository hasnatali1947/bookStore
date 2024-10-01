import React from 'react'
import Banner from "../../component/banner/page";
import Footer from "../../component/footer/footer";
import Freebooks from "../../component/freebooks/page";
import Navbar from "../../component/navbar/page";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Freebooks />
            <Footer />
        </div>
    )
}

export default Home
