// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { GrStarOutline } from "react-icons/gr";

const Accordion03 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion03Reviews = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div >
        <> 
        <div className=' relative flex justify-center content-center mx-auto     w-[87%]' >
        <div onClick={toggleAccordion03Reviews} 
        className={`openMenu  relative flex justify-center items-center w-full  h-full   mx-auto 
      }`} 
    >
        <div className='Accordion03ReviewsWrapper  relative bg-[#41301b]  rounded-3xl w-full xs:w-[97%] sm:w-[95%] mt-2 h-full cursor-pointer '>
        
          <div  className='flex justify-center mx-auto content-center 
          pb-[6px] pt-[4px]'>
            <button  className='text-amber-100  text-base sm:text-2xl font-extrabold '
                       style={{ textShadow: '1px 1px 2px black' }}>
             <div className='absolute left-[3px] top-[4px] sm:top-[9px] w-8  h-8  bg-gradient-to-b 
             from-amber-200 to-varDarkBrown shadow-sm  shadow-black  rounded-full pt-[7px] text-4xl ' 
             style={{ textShadow: '0px -1px 2px black' }}> <span className='triangle'></span></div>
               <div className='underline pb-2'>Reviews</div>
               
            </button>
          </div>
          {isOpen &&
            <>
            <div   className=' flex-col justify-start content-center  '>
              
               

  
<span className='ReviewsPersonName'>Elmer James</span> <br/> 
<span className='ReviewsPersonDate'>Nov, 1 2022</span> <br/> 
 <span className="ReviewsPersonStarRating">
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
  </span>
<p className='ReviewsPersonParagraph'>They are committed to ensuring customer satisfaction and take pride in providing their customers with the best possible experience.</p> 
<hr className="ReviewsPersonHorizontalRule
"/>
  <br />
<span className='ReviewsPersonName'>Jimmy Franks</span> <br/> 
<span className='ReviewsPersonDate'>June, 21 2022</span> <br/> 
<span className="ReviewsPersonStarRating">
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
  </span>
<p className='ReviewsPersonParagraph'>They listen to their customers&apos; feedback and take their suggestions into consideration to improve their services.</p> 
<hr className="ReviewsPersonHorizontalRule
"/>
<br />
<span className='ReviewsPersonName'>Freddy Winks</span> <br/> 
<span className='ReviewsPersonDate'>Ausust,19 2022</span> <br/> 
<span className="ReviewsPersonStarRating ">
<span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
   <span className='stars inline-block   text-varGold'><GrStarOutline size={22} /></span>
  </span>
<p className='ReviewsPersonParagraph'>XYZ Company believes that happy customers are the key to their success, and they strive to make sure that every customer is satisfied with their work.</p> 
<hr className="ReviewsPersonHorizontalRule
"/>
            </div>
  
            </>
            }
        </div>
      </div>
      </div>
      </>
      </div>
  );
};

export default Accordion03

