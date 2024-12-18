import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import Popup from "./components/Popup";
import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import Home from './Pages/Home'
import Footer from "./components/Footer";

const App = () => {
  const [show, setShow] = useState(true);
  const [scrollValue,setScrollValue] = useState();
  const { scrollYProgress } = useScroll(0);

  scrollYProgress.on("change",(value) => setScrollValue(value));


  return (
    <motion.div className="h-screen w-screen flex flex-col ">
      <motion.div className={`w-screen  h-[50px] fixed`}>
        {show ? <Popup /> : <></>}
        <Navbar show={show} scrollValue={scrollValue} />
      </motion.div>
      <HeroCard />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     
    </motion.div>
  );
};

export default App;
