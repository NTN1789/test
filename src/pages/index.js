import React from "react";
import Header from "../components/Header";
import Main from "../components/main/Main";

import About from "../components/About/About";
import Footer from "../components/footer/Footer";


const Home = () => {

    return(
        <div>
            <Header />
            <Main/>
            <About/>
     <Footer/>
        </div>
    )
}
export default Home;