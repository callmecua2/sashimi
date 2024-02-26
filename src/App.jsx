import { useState, useRef } from 'react'
import './App.css'
import "./components/customnavbar.css"
import close from "./assets/icon/close.png"
import settings from "./assets/icon/settings.png"
import Header from './components/pages-components/Header'
import About from "./components/pages-components/About"
import Widget from './components/pages-components/Widget'
import Menu from './components/pages-components/Menu'
import Bookingheader from './components/pages-components/Bookinheader'
import Contact from './components/pages-components/Contact'
import Form from './components/pages-components/Form'
import Advertisment from './components/pages-components/Advertisment'
import Testimonials from './components/pages-components/Testimonials'
import Chefs from './components/pages-components/Chefs'
import Operationalday from './components/pages-components/Operationalday'
import FooterTagline from './components/pages-components/FooterTagline'
import FooterAds from './components/pages-components/Footerads'
import Footer from './components/pages-components/Footer'


function App() {
  const openTab = () => {
    let openTabButton = document.querySelector(".openTab-btn");
    let navbarMenu = document.getElementById("navbar-tab");

    openTabButton.addEventListener("click", () => {
      navbarMenu.style.left = "0px";
    });
  };

  const closeTab = () => {
    let openButton = document.getElementById("open-tab-button");
    document.getElementById("navbar-tab").style.left = "1200px";
    setTimeout(() => {
      openButton.style.display = "block";
    }, 400);
  };

  // navbar end

  const reservationRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null)

  const reservationScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const menuScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const contactScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <>
       <div className="navbar">
        <h2 className="navbar-title" onClick={()=>window.location.reload()}>Sushiku</h2>
        <img
          src={settings}
          id="open-tab-button"
          className="openTab-btn"
          onClick={() => openTab()}
          alt="button"
        />
        <nav id="navbar-tab">
          <ul className=" lg:font-semibold">
            <li onClick={()=>window.location.reload()}>Home</li>
            <li onClick={()=>menuScroll(menuRef.current)}>Menu</li>
            <li onClick={()=>reservationScroll(reservationRef.current)}>Reservation</li>
            <li onClick={()=>contactScroll(contactRef.current)}>Contact Us</li>
            <li>Whats New?</li>
          </ul>
          <img
            src={close}
            id="close-tab-button"
            className="closeTab-btn"
            onClick={() => closeTab()}
            alt="button"
          />
        </nav>
      </div>

      <div className="container w-full m-auto">
        <div className="header flex justify-center items-center flex-col">
          <Header />
          <div className="tagline-button text-white">
            <button
              onClick={() => reservationScroll(reservationRef.current)}
              id="reservation-button"
              className=" xl:text-xl"
            >
              Reservation
            </button>
            <button
              onClick={() => menuScroll(menuRef.current)}
              id="view-menu-button"
              className=" xl:text-xl"
            >
              View Menu
            </button>
          </div>
        </div>

        <div className="about-section w-full mt-10 md:flex justify-center items-center flex-col lg:flex-row ">
          <About />
        </div>

        <div className="widget-image w-full flex justify-center items-center flex-col mt-20 lg:flex-row lg:gap-5">
          <Widget />
        </div>

        <div className="menu-section w-full flex justify-center items-center flex-col mt-20 lg:mt-28">
          <div className="menu-section-textbox w-3/4 mt-4 xl:w-1/2 ">
            <h2
              ref={menuRef}
              className=" text-3xl md:text-4xl lg:text-3xl font-bold mb-4"
            >
              Featured Menu
            </h2>
            <p className=" md:text-xl lg:text-l xl:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="menu-table w-11/12 xl:w-10/12 mt-8 lg:flex lg:gap-5 ">
            <Menu />
          </div>
        </div>

        <div className=" booking-section w-full flex justify-center items-center flex-col mt-28">
          <Bookingheader />

          <div className=" lg:flex lg:gap-5 xl:justify-center xl:gap-10">
            <Contact />
            <div
              ref={reservationRef}
              className="booking-online w-full lg:w-1/2 xl:w-1/2 lg:mt-20 flex justify-center items-center flex-col mt-10 pb-3 md:mt-16 xl:mr-10 bg-slate-700"
            >
              <Form />
            </div>
          </div>
        </div>

        <Advertisment />
        <Testimonials />
        <Chefs />
        <Operationalday />
        <FooterTagline />
        <div ref={contactRef}>
          <FooterAds />
        </div>    
      </div>
      <Footer />
    </>
  )
}

export default App
