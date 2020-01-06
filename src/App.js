import React from 'react';
// import HomePage from './pages/HomePage';
// import AboutDescription from './components/AboutDescription/AboutDescription';
// import TopNavigation from './components/TopNavigation/TopNavigation';
// import PageTop from './components/PageTop/PageTop';
// import AboutPage from './pages/AboutPage';
// import SpecializationPage from './pages/SpecializationPage';
// import Projects from './pages/Projects';
// import ContactUs from './components/ContactSection/ContactUs';
// import ContactPage from './pages/ContactPage';
// import ServicePage from './pages/ServicePage';

import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";



// import SignIn from './components/SignIn/SignIn';

// import logo from './cpo-experts-logo.svg';
// import './App.css';

function App() {
  return (

    <BrowserRouter>
    <AppRoute/>
  </BrowserRouter>



    // {/* <div className="App"> */}




    //     {/* <HomePage /> */}

    //   {/* <SignIn /> */}

    //   {/* <TopNavigation />
    //   <PageTop  pagetitle="About Us"/>
    //   <AboutDescription /> */}
    //   {/* <AboutPage /> */}

    //   {/* <SpecializationPage /> */}

    //   {/* <Projects /> */}
    //   {/* <ContactUs /> */}

    //   {/* <ContactPage /> */}
    //   {/* <ServicePage /> */}
    // {/* </div> */}

  );
}

export default App;
