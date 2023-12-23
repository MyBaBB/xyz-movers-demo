// eslint-disable-next-line no-unused-vars
import React from 'react'
import InstagramIcon from "../assets/Img/InstagramIcon.webp"
import FacebookIcon from "../assets/Img/FacebookIcon.webp"
import OldPhoneImg from "../assets/Img/OldPhone.webp"

const ConactBar = () => {
  return (
    <div>
      <>
  
      <div className='OurReelsBoxTruckWrapper relative justify-evenly  flex block  mx-auto mt-[6.75rem] md:mt-[9rem]'>
      <a href="https://empty">
         <div className='OurReelsBoxTruck w-[60px] xxs:w-[70]px xs:w-[80px]  relative  content-center border-2 border-[#614829] flex w-fit rounded-[14px]  '>
             <img src={ InstagramIcon} alt="Instagram Movers Icon" 
             className='rounded-xl' />
         </div>
      </a>
     
      <button onClick={() => window.location.href = 'tel:555-555-5555'}>
            <div className='OldPhoneImage md:hidden w-[60px] xxs:w-[70]px xs:w-[80px] relative  content-center border-2 border-[#614829] flex w-fit   rounded-[14px]   '>
               <img src={OldPhoneImg} alt="Old Phone Img" className='rounded-xl' />
            </div>
      </button>

<div className='relative justify-center content-center mx-auto hidden md:block'>
 <p className='text-white font-serif text-3xl mt-2  '><u>555-555-5555</u></p>
 </div>

      <a href="https://empty">
         <div className='OurReelsBoxMover w-[60px] xxs:w-[70]px xs:w-[80px]  relative  border-2 border-[#614829] flex w-fit rounded-[14px]   '>
             <img src={FacebookIcon} alt="Facebook Mover Icon" 
             className='rounded-xl' />
         </div>
         </a>







      </div>
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      </>
    </div>
  )
}

export default ConactBar
