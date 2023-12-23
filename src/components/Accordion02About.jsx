// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Accordion02 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion02About = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div >
        <> 
      <div onClick={toggleAccordion02About} 
      className={`openMenu relative flex justify-center 
      items-center   xs:left-[-.3rem] w-[101%] h-full  mb-2
      }`}
    >
        <div className='AboutUsParagraphAccordion2 md:hidden bg-[#41301b]   rounded-3xl w-[80%] p-2 m-2 shadow-lg shadow-black  mt-2
        cursor-pointer '>
        
          <div className='relative flex justify-center '>
            <button  className='text-amber-100  text-base sm:text-2xl w-full  font-extrabold'
                       style={{ textShadow: '1px 1px 2px black' }}>
             <div className='absolute left-[-4px] top-[-4px]  sm:top-[0px]  w-8  h-8  bg-gradient-to-b 
             from-amber-200 to-varDarkBrown shadow-sm  shadow-black  rounded-full pt-[7px] text-4xl ' 
             style={{ textShadow: '0px -1px 2px black' }}>
              <span className='triangle'></span></div>
 About us
            </button>
          </div>
          {isOpen &&
            <>
          <article >
<div className='AboutUsParagraphWrapper  p-1  -mb-[9px] text-center block md:hidden  
  '>
  <h2  className='AboutUsh2 text-[.75rem]  xxs:text-[.95rem]  xs:text-[1.25rem] sm:text-[1.55rem]   md:text-[1.75rem]   ' >Welcome to XYZ Movers!</h2>
  <hr className='my-2 w-[70%] min-w-[240px] mx-auto'/>
   <p >
   
   “Welcome to our moving company! We are dedicated to providing you with the best moving experience possible. Our team of experienced professionals is committed to ensuring that your move is smooth, stress-free, and hassle-free. We understand that moving can be a daunting task, which is why we offer a wide range of services to meet your needs. Whether you&apos;re moving across town or across the country, we&apos;ve got you covered. Our goal is to make your move as easy and stress-free as possible, so you can focus on settling into your new home. Thank you for choosing our moving company, and we look forward to working with you!”
   </p>
 </div>
 



 </article>
            </>
            }
        </div>
      </div>
      </>
      </div>
  );
};

export default Accordion02

