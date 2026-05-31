import React from 'react'
import { LuPackage } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";

function Highlight_Section() {
  return (
    <div className='container mx-auto px-5 border-b border-black/10 mb-20'>
        <div className='flex items-center flex-col md:flex-row gap-6 py-7 justify-between '>
            <div className='flex items-center gap-3 md:border-r md:border-black/10 pr-5 '>
                <LuPackage size={40}  />
                <div>
                    <h3 className='text-[18px]  md:text-xl '>Free Shipping</h3>
                     <p className='text-sm'>No minimum, always ships free. </p>  
                </div>              
            </div> 
            
              <div className='flex items-center gap-3 md:border-r md:border-black/10 pr-5'>
                <LuShoppingBag size={40}  />
                <div>
                    <h3 className='text-[18px]  md:text-xl '>Secure Checkout</h3>
                     <p className='text-sm'>No minimum, always ships free. </p>  
                </div>              
            </div> 

             <div className='flex items-center gap-3 md:border-r md:border-black/10  pr-5'>
                <MdVerified size={40}  />
                <div>
                    <h3 className='text-[18px]  md:text-xl '>Authenticity Guaranteed </h3>
                     <p className='text-sm'>No minimum, always ships free. </p>  
                </div>              
            </div> 

            <div className='flex items-center gap-3'>
                <LuMessageCircle size={40}  />
                <div>
                    <h3 className='text-[18px]  md:text-xl '>Premium Support </h3>
                     <p className='text-sm'>No minimum, always ships free. </p>  
                </div>              
            </div> 


            
             
        </div>
    </div>
  )
}

export default Highlight_Section