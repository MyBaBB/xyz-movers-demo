/* eslint-disable no-unused-vars */
 
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail }
        from 'react-icons/ai';
import MovericonPing from "../assets/Img/MovericonPing1.webp"
import { BsPersonRaisedHand } from "react-icons/bs";

import { FaCameraRetro } from "react-icons/fa";
const ThreeBars = () => {
   const [nav, setNav] = useState(false)
       const handleNav = () => {
          setNav(!nav);
    };
  return (
    <div>
      <>
     <div className='outersideContainer '> 
       <AiOutlineMenu  size={50} onClick={handleNav} className='fixed top-4 sm:top-[1.5rem]  right-5 sm:right-4  z-[99] md:hidden
       
    ' style={{color:"#403121"}}  />
     {

              /* The hidden Mobile Screen  */    
      nav ? (
        <div className='hiddenMobile fixed  top-0 left-0 right-0 bottom-0 w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 '>

          <a onClick={handleNav} href="#" className='w-[65%]
           mt-[5rem] md:mt-22 text-black flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineHome size={20}  />
            <span className='pl-4 '> Home</span>
          </a>
          <a onClick={handleNav} href="https:empty" className='scroll-m-10 text-black w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <FaCameraRetro size={20}  />
            <span className='pl-4'> Instagram</span>
          </a>
          {/* <a onClick={handleNav} href="#AboutUsh2" className='text-black w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <BsPersonRaisedHand size={20}  />
            <span className='pl-4'>About Us</span>
          </a> */}
          <a onClick={handleNav} href="https://empty" className='text-black w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
          <div className='MovericonPingWrapper w-[22px]'>
          <img src={MovericonPing} alt="Mover Icon" />
         </div>
            <span className='pl-4'>Facebook</span>
          </a>

          
          
          <button onClick={() => window.location.href = 'tel:555-555-5555'}  className='text-black w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineMail size={20}  />
            <span className='pl-4   '>Contact</span>
          </button>
        </div>
 






        )
        : (
        '' 
        )}
           {/*  The hidden Mobile Screen    */}


                 {/* sideButtons */}
   {/*    <div className='sideButtonsWrapper hidden md:fixed   z-10 
            
     '>
      <div className='flex flex-col '>
        <a href="#" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <AiOutlineHome size={20} />
        </a>
        <a href="#OurPhotos" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <FaCameraRetro size={20} />
        </a>
        <a href="#projects" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <div className='MovericonPingWrapper w-[22px]'>
          <img src={MovericonPing} alt="Mover Icon" />
         </div>
        </a>
        <a href="#contact" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <AiOutlineMail size={20} />
       </a>
      </div>
     </div> */}
                 {/* sideButtons */}
<div>

</div>

     </div>
     </> 
    </div>    

          
    
        
     
  );
};

export default ThreeBars;