import React from 'react'
import { SlWallet } from "react-icons/sl";
import { FaTrophy } from "react-icons/fa6";
import { useState } from 'react';
import Modal from './Modal';
import { MdLeaderboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Leader = () => {



    const [modal,setModal]= useState(false);
   
  return (
    <>
    <div className='w-screen h-screen bg-[#F4F2EE] overflow-hidden  ' >
    <div className='mx-auto bg-white  w-[100%] md:w-[40%] h-[100%] p-2 border relative box-border'>

<div className="page-details flex justify-between items-center h-[10%]">
  <h1 className='font-bold text-xl'> LeaderBoard</h1>
  <div className='flex justify-center items-center gap-2'>
  <div className='w-[90px] border-green-400 flex border p-2 rounded-xl '>
<img src="https://res.cloudinary.com/djfzcmvmr/image/upload/v1723092366/TaskPlanet/lllkk_tlu5v5.png" alt="icon" className='w-[20px] h-[20px] object-contain' />
<p className='text-base text-blue-500 font-semibold'>$500</p>
</div>
<div className='w-[90px] border-green-400 flex border p-2 rounded-xl '>
<SlWallet size={"20px"} className='font-semibold  text-green-400' />
<p className='text-base text-blue-500 font-semibold'>$500</p>
</div>
            <img src="https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png" alt=""  className='w-[40px] h-[40px] object-contain'  />
        </div>
</div>

<div className='w-[100%]  flex justify-evenly items-center h-[50px] my-4 border-orange-300 border-2 rounded-xl '>
    <div className=' rounded-lg cursor-pointer font-bold '>DAILY</div>
    <div className=' rounded-md   cursor-pointer font-bold'>WEEKLY</div>
    <div className='  rounded-md  cursor-pointer font-bold'>MONTHLY</div>

</div>



<div className="top-3-runner flex justify-around">
   
   
  
      
  
        <div className='border-blue-500 rounded-full border-2 w-[75px] h-[75px]  relative'>
        <div className='w-[25px] h-[25px] absolute flex items-center justify-center right-[-3px] text-xs text-center font-semibold text-white bg-green-500 rounded-full'>1st</div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREd5k6d2v1JkWsR3wbPSdAZbY4KdpDxEgdAA&s" alt="img" className='w-[70px] h-[70px] object-contain rounded-full' / ></div>
        <div className='border-blue-500 rounded-full border-2 w-[75px] h-[75px]  relative'>
        <div className='w-[25px] h-[25px] absolute flex items-center justify-center right-[-3px] text-xs text-center font-semibold text-white bg-green-500 rounded-full'>2nd</div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREd5k6d2v1JkWsR3wbPSdAZbY4KdpDxEgdAA&s" alt="img" className='w-[70px] h-[70px] object-contain rounded-full' / ></div>
  
        <div className='border-blue-500 rounded-full border-2 w-[75px] h-[75px]  relative'>
        <div className='w-[25px] h-[25px] absolute flex items-center justify-center right-[-3px] text-xs text-center font-semibold text-white bg-green-500 rounded-full'>3rd</div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREd5k6d2v1JkWsR3wbPSdAZbY4KdpDxEgdAA&s" alt="img" className='w-[70px] h-[70px] object-contain rounded-full' / ></div>
  
      

 </div>
 












<div className="user-list-container overflow-y-scroll p-2 flex  flex-col h-[55%] no-scrollbar">
<div className="leaderboard my-3 p-3 flex justify-evenly items-center bg-[#E9EAEC] transition-all ease-in duration-100 gap-5 hover:bg-gray-300 rounded-xl " onClick={()=>{
    setModal(!modal);
  
}}>
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Zxorf4oM4fYzTODD7BHtO1cmGcI5ibkNKg&s" alt="task logo" className='w-[40px] h-[40px] rounded-full'/>
            </div>
            <div className="details font-semibold">Ram</div>
            <div><img src="https://img.freepik.com/premium-vector/trophy-golden-winner-cup-award-isolated-concept-cartoon-graphic-design-element-illustration_133260-5578.jpg" alt="" className='w-[40px] h-[40px] object-contain rounded-full' /></div>
            <div>
                <p className='font-bold'>900</p>
            </div>
        </div>
   
        <div className="leaderboard my-3 p-3 flex justify-evenly items-center bg-[#E9EAEC] transition-all ease-in duration-100 gap-5 hover:bg-gray-300 rounded-xl " onClick={()=>{
    setModal(!modal);
  
}}>
    <Modal setModal={setModal} modal={modal}/>
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Zxorf4oM4fYzTODD7BHtO1cmGcI5ibkNKg&s" alt="task logo" className='w-[40px] h-[40px] rounded-full'/>
            </div>
            <div className="details font-semibold">Ram</div>
            <div><img src="https://img.freepik.com/premium-vector/trophy-golden-winner-cup-award-isolated-concept-cartoon-graphic-design-element-illustration_133260-5578.jpg" alt="" className='w-[40px] h-[40px] object-contain rounded-full' /></div>
            <div>
                <p className='font-bold'>700</p>
            </div>
        </div>
        <div className="leaderboard my-3 p-3 flex justify-evenly items-center bg-[#E9EAEC] transition-all ease-in duration-100 gap-5 hover:bg-gray-300 rounded-xl " onClick={()=>{
    setModal(!modal);
  
}}>
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Zxorf4oM4fYzTODD7BHtO1cmGcI5ibkNKg&s" alt="task logo" className='w-[40px] h-[40px] rounded-full'/>
            </div>
            <div className="details font-semibold">Shujan</div>
            <div><img src="https://img.freepik.com/premium-vector/trophy-golden-winner-cup-award-isolated-concept-cartoon-graphic-design-element-illustration_133260-5578.jpg" alt="" className='w-[40px] h-[40px] object-contain rounded-full' /></div>
            <div>
                <p className='font-bold'>600</p>
            </div>
        </div>

   







   
</div>

<div className="navigation-tab h-[10%] bg-[#2F68FD] w-[100%] flex justify-between items-center p-2 rounded-md">
      <Link to="/"> <button className='text-white flex items-center gap-2'><FaTasks />Taskscreen</button></Link> 
     <Link to="/leader"> <button className='text-white text-sm flex gap-2'><MdLeaderboard size={"20px"} />Leaderboard</button></Link>  
    </div>






































    </div>

</div>


</>
  )
}

export default Leader