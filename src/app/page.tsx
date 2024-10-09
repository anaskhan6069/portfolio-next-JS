
import React from "react"
import Header from "../Components/Header"
import Home from "../Components/Home"
import About from "../Components/About"
import Services from "../Components/Services"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"


const Page = () => {
    return (
        <>
          <main>
            <Header ></Header>
            <Home></Home>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
          </main>
        </>
    )
}

export default Page;