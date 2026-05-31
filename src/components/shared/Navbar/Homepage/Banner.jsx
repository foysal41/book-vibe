import React from "react";
import heroBGCover from "../../../../assets/white-wrinkled-paper.jpg";
import say_good_by_Book from "../../../../assets/say_good_by.webp";
import badge from "../../../../assets/badge_harga.png";
import { FaShoppingCart } from "react-icons/fa";


const Banner = () => {
  return (
    <div className=" min-h-[70vh] flex items-center px-5 py-5 relative overflow-hidden" style={{backgroundImage: `url(${heroBGCover})`}}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-5 z-10">
       
        <div className="md:w-1/2 text-center md:text-left">
            <span className="font-sm italic  bg-black text-white px-2 py-1 font-libre  ">Exclusive Deal</span>
            <h1 className=" text-4xl md:text-7xl  font-medium my-5 ">
            Before You Say  <br></br> Goodbye. </h1> 

            <h3 className=" font-bold  text-sm md:text-2xl">A Fiction Novel By Thomas Dietrich</h3>

           <p className="my-5">A powerful story of love, loss, and self-discovery. "Before You Say Goodbye" takes readers on an emotional journey through life's most difficult choices, reminding us that every ending carries the possibility of a new beginning.</p>

            <button className="  w-full md:w-fit md:w-inline mt-4 text-white text-sm px-5 bg-[#14C192] flex py-3 items-center justify-center rounded-sm gap-2"> <FaShoppingCart />View The List </button>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
        <img src={badge} className="absolute right-0 md:right-25  w-[70px] md:w-25"></img>
           <img src={say_good_by_Book} className=" rounded-lg w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
