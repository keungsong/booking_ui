import React, { useState } from 'react'
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai";
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useEffect } from 'react';
let items = [];

const CartItem = ({item,setFlag,flag}) => {
    const [qty,setQty] = useState(item.qty);
    const [{cartItems},dispatch] = useStateValue();
   const [items,setItems] = useState([])

    const cartDispatch = ()=>{
        localStorage.setItem("cartItems",JSON.stringify(items)); 
        dispatch({
            type:actionType.SET_CART,
            cartItems:items,
        })
    }
    const updateQty = (action,id)=>{
       if(action=="add"){
        setQty (qty+1);
         cartItems.map(item =>{
            if(item.id === id ){
                item.qty += 1;
                setFlag(flag + 1);
            }
         });
         cartDispatch();
       }else{
        // initial state value is one so you need to check if 1 then remove it
        if(qty==1){
           items = cartItems.filter((item)=>item.id !== id);
           setFlag(flag + 1);
           cartDispatch();
        }else{
           setQty(qty - 1);
           cartItems.map((item)=>{
            if(item.id === id){
                item.qty -= 1;
                setFlag(flag + 1);
            }
           })
            cartDispatch(); 
        }
        
       }
    };
    
    useEffect(()=>{
      setItems(cartItems);

    },[qty]);
   
  return (
    <div  className='w-full p-1 px-2 rounded-lg bg-green-400 flex items-center gap-2 '>
    <img src={item?.imageURL}
    className='w-20 h-20 max-w-[60px] rounded-full object-contain' alt="" />

    {/**name section */}
    <div className='flex flex-col gap-2'>
        <p className='text-base text-black'>
            {item?.title}
        </p>
        <p className='text-lg block text-black font-semibold'>
        <span className='text-base text-red-500'>₭ </span> { parseFloat(item?.price) * qty}
        </p>

    </div>
    {/**bottom section */}
    
    <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
        {/**cart items section */}
        <motion.div whileTap={{scale:0.75}} onClick={()=>updateQty("remove",item?.id)} >
         <AiOutlineMinusCircle className='tex-gray-50 text-3xl '/>
        </motion.div>
        <p className='w-5 h-5 rounded-sm bg-red-500 text-gray-50 flex items-center justify-center'>
           {qty}
        </p>
        <motion.div whileTap={{scale:0.75}} onClick={()=>updateQty("add",item?.id)}>
            <AiOutlinePlusCircle className='tex-gray-50 text-3xl'/>
        </motion.div>

    </div>

       </div>
  )
}

export default CartItem