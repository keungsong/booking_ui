import React from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import MenuContainer from './MenuContainer';
import CardContainer from './CardContainer';
import Slider from './Slide';
import About from './About';


const MainContaner = () => {
    const [{foodItems,cartShow}, dispatch] = useStateValue();

    const [scrollValue,setScrollValue] = useState(0)

    useEffect(()=>{},[scrollValue,cartShow]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
     {/** <HomeContainer/> */}

       {/**<section className='w-full my-10 '>
       
          <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor  relative
          before:absolute before:rounded-lg before:content before:w-32 before:h-1
          before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-400 to-green-600 transition-all ease-in-out
          duration-100'>Our fresh & healthy fruits
          </p>
          
           
        </div>
      
        <div className='w-full'>
        <RowContainer
         scrollValue = {scrollValue}
         flag={true} data={foodItems?.filter(n=>n.category=== 'Fruit')}/>
         <div className='hidden md:flex gap-3 items-center justify-end'>
            <motion.div 
            whileTap={{scale:0.75}}
            className='w-8 h-8 rounded-full bg-green-300 hover:bg-green-500 cursor-pointer 
            transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
            onClick={()=>setScrollValue(-200)}>
            < MdChevronLeft className='text-lg text-white'/>
            </motion.div>
            <motion.div
             whileTap={{scale:0.75}}
            className='w-8 h-8 rounded-full bg-green-300 hover:bg-green-500 cursor-pointer 
            transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
            onClick={()=>setScrollValue(200)}>
             < MdChevronRight  className='text-lg text-white'/>
            </motion.div>

          </div>
        </div>
      </section>   */}
      <Slider/>
      <MenuContainer/>

      {
        cartShow && (
          <CardContainer/>
        )
      }
      <About/>
      <section className='grid grid-col-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <p className='text-gray-400'> copyright2022@keungxiong</p>
      </section>
     
    </div>
  )
}

export default MainContaner