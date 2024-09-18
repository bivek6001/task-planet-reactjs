import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaAt } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { MdLeaderboard } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
const Modal = ({setModal,modal}) => {
  return (
    <>
  
    <div className={`bg-opacity-30 transition-all ease-in-out duration-500 translate-x-0  ${modal ? "translate-y-[0]" : "translate-y-[150%]"}  absolute bg-black w-[100%]  top-0  h-screen  border`} >
                    <div onClick={()=>{
                        setModal(!modal)
                    }} className="cross absolute top-[260px] right-0 w-[30px] h-[30px]  rounded-full " ><IoCloseCircle  size={"100%"} className='text-white ' /></div>
        <div className='w-[100%] h-[50%] p-3 bg-white absolute bottom-0 flex flex-col justify-center items-center' >
            <div className='absolute top-[-50px]  border-2 border-[#BC2AB6] rounded-full'>
                <img src="https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png" alt="profile" className='w-[90px] h-[90px]' />
            </div>
         <div className="profile-info  p-2 flex flex-col justify-center border-2 my-4 border-[#F93657] rounded-md">
         <div className="username text-black flex justify-center items-center">
        <p className='text-base font-bold'>@Raju Singh</p>
               
            </div>
            <div className="location-info flex flex-col">
                <div  className='flex'>  <FaLocationDot className='text-[#FF7E8B]' />  <p className='font-semibold text-sm'>Jharkhand,India</p>  </div>
        
            </div>
            <div className="member flex items-center justify-center ">

                
            <p className='flex justify-center items font-semibold text-sm'  ><FcHome />Member: 18th September, 20XX</p>

            </div>
         </div>

            <div className="task flex flex-col  shadow-xl rounded-lg w-[100%] p-2 border">
            <MdLeaderboard size={"30px"} className='text-[#F93657]' />
               <div className="leader-status flex flex-col">
               <div className="daily font-semibold text-white text-xs p-1 bg-green-600">Daily: 780</div>
 
                <div className="weekly font-semibold  text-white text-xs p-1 bg-yellow-400">Weekly:120</div>
                <div className="monthly font-semibold  text-white text-xs p-1 bg-red-400">Monthly:560</div>
               </div>
                
            </div>
        </div>




    </div>

    </>
  )
}

export default Modal