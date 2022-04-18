import React from 'react'
import Header from "./components/header/header";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Porfolio from "./components/porfolio/porfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Testimony from "./components/testimony/Testimony";

const App = () =>{
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Services/>
            <Porfolio/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </>
)
}

export default App