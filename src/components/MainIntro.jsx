// eslint-disable-next-line no-unused-vars
import React from 'react'

import EmptyRotator1 from "../assets/Img/EmptyRotator1.webp"
import Movers from "../assets/Img/Movers.webp"
import Movericon2 from "../assets/Img/Movericon2.webp"
import TruckSmallScreen from "../assets/Img/TruckSmallScreen.webp"
import Accordion01Images from './Accordion01Images.jsx'
import Accordion02About from './Accordion02About.jsx'
import Accordion03Reviews from './Accordion03Reviews.jsx'
import ContactBar from './ContactBar.jsx'
import Copyright from './Copyright.jsx'
const MainIntro  = () => {
  return (
    <div>
       <>

<div className='bodyWrapper'>
  <div className='HeaderWrapper'>
 
           {/* the Animated */}
         
     <article className='HiddenTitleforSeo absolute left-[-100rem]'><h1>The Best Mover in Pasadena, California</h1>
     </article>

    <div className='RotateHandsWrapper     
           bg-transparent
       -top-[2.5rem] xxs:top-[-2rem]  xs:-top-[2.5rem] sm:-top-[1.95rem]  md:-top-[1.35rem] lg:-top-[.8rem]
       -left-[2rem] xxs:-left-2rem sm:-left-[1.75rem] md:-left-[1.35rem] lg:-left-[.7rem]
        
       >
          scale-[35%] sm:scale-[50%] md:scale-[60%] lg:scale-[70%] '>
               <div className=' relative  w-fit animate-spin'
                style={{ animationDuration: '9s' }}>
                  
               <img id='RotateHelpingHands' src={EmptyRotator1} alt="Spinner Badge" />
               </div>
         
              {/*  <div>
               <img id='RotateHelpingHands2' src={} alt="Spinner Badge2" />
               </div>  */}           
               
         </div>
         {/* <div id='RotateHandsWords'></div> */}

  
       {/*  the Animated Rotator */}

           {/*   Heading 1 sm: hidden  */}
       <p className='HelpingHandHeading1  text-amber-100 
           xxs:hidden  sm:hidden md:block lg:block xl:block hidden  
           
              md:text-[1.75rem] lg:text-[1.75rem] xl:text-[2rem]
            
           translate-y-[-.90rem] xs:translate-y-[-1.2rem] lg:translate-y-[-1rem]      '>
              XYZ Better Movers
       </p>{/*   Heading 1 sm: hidden  */}

           {/*   Heading 2 lg: hidden */}
       <p className='HelpingHandHeading2 text-amber-100    
             md:hidden lg:hidden xl:hidden   
             text-[.6rem] xxs:text-[.85rem] xs:text-[1.2rem] sm:text-[1.2rem] 
              md:text-[1.55rem] lg:text-[1.75rem] xl:text-[2rem]
              mt-[-12px] sm:mt-[-10px]
             
           translate-y-[-.90rem] xs:translate-y-[-1.2rem] lg:translate-y-[-1rem]      '>
              XYZ Area<br /> Better Movers
       </p>{/*  Heading 2 lg: hidden  */}

            {/* Mover Icon */}
       <div className='MovericonWrapper fixed flex w-fit
           p-1 shadow-inner  bg-transparent rounded-full  hidden md:block
               md:-top-[1.65rem] lg:-top-[1.5rem]
           -right-[2rem] xxs:-right-2rem sm:-right-[1.75rem] md:-right-[1.55rem] lg:-right-[.7rem]  >
          scale-[35%] sm:scale-[50%] md:scale-[60%] lg:scale-[70%] '>
         <div className=' relative w-[160px]'>
              <img src={Movericon2} alt="Mover Icon" className='animate-pulse scale-105 duration-500' />
        </div>
      </div>{/* Mover Icon */}

    </div>
 </div>     {/*above is the HeaderWrapper */} 
          
      
 < ContactBar/>
  
<div className='Accordian2Wrapper relative  block  px-[10px]   sm:px-[.5rem]
        mt-[.5rem]   md:mt-[1rem] text-green-50' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}> 
          
          

        <h2 id='HelpingHandMovers_H1' className='WhiteSpaceNowrap  text-amber-100 hidden md:block pb-7 mb-0  sm:mb-4 mt-[-1rem]'>  Movers</h2>

            {/* TruckSmallScreen */}
         <div className='flex justify-center content-center mb-3'>
         <div className='Movers md:hidden relative flex w-fit  mt-1.5 md:mt-[1.2rem] block  ]'>
       <img src={TruckSmallScreen} alt="Two Guys Moving" width={250} height={250} className=' rounded-[18px] z-1' />
         </div>      
         </div>
            {/* TruckSmallScreen */}

            {/*  TopIntro */}

            <div className='AboutUsParagraphWrapper relative flex justify-center content-center mx-auto   hidden md:block'>

        <p id='AboutUsh2' className='AboutUsh2 text-[1.45rem]
           lg:text-3xl      
           ' >
           
         
         
       </p>
   
         
   <p className='AboutUsParagraphMdBlock text-lg lg:text-2xl  p-4 
    '>
   XYZ Company is committed to ensuring customer satisfaction. Their team of professionals is dedicated to making sure that every customer is happy with their services. They listen to their customers&apos; feedback and take their suggestions into consideration to improve their services. XYZ Company believes that happy customers are the key to their success, and they strive to make sure that every customer is satisfied with their work. If you have any concerns or questions, please do not hesitate to reach out to them. They are always here to help! 1
   </p>
 
   </div>



            {/*  TopIntro */}

<div className='relative flex justify-center content-center mx-auto '> 
            <div id='OurPhotos' className='relative scroll-mt-[-4rem]'>
            {/* Several images in one Hidden for large screens. */}
       <div  className='Movers -scroll-mt-80 relative flex w-fit mt-[1.5rem]
        hidden md:block min-w-[240px]      
          '>
       <img src={Movers} alt="Movers" width={645} height={322} className='MoversImg rounded-[18px] z-0' />
       </div>
  </div>
 </div>
            {/* Several images in one Hidden for large screens. */} 
           
                              {/* Bottom Paragraph */}
    <div className='relative flex justify-center content-center
             mx-auto w-[100%] mt-4 '>
          <article className='TopArticleWrapper'>
            <h2 className='TopIntro text-xl  md:text-2xl pt-2 md:px-[2rem] mb-2 text-amber-200'> We are the Best Movers In Town.
             </h2>
             <Accordion02About />
                <p className='text-2xl  md:px-[1rem] p-2'>
          We get you to your destination Safe and Secure
           <br />
           <span className='text-base'><Accordion03Reviews /> ⭐⭐⭐⭐⭐</span>
                </p>
                
                <Accordion01Images/>
                <Copyright />
         </article>
</div>

      

   
 

 





 

</div>
  </>
</div>
  )
}

export default MainIntro 



