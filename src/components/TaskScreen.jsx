import React from 'react'
import { MdLeaderboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { Link } from 'react-router-dom';
const  TaskScreen = () => {
  return (
    <div className='w-screen h-screen relative  ' >
        <div className='mx-auto  w-[100%] md:w-[40%] h-[100%] p-2 border relative '>
    <div className="page-details flex justify-between h-[10%]">
        <h1 className='font-bold text-xl'>Task details</h1>
        <div className='flex '>
            <img src="https://res.cloudinary.com/djfzcmvmr/image/upload/v1723092366/TaskPlanet/lllkk_tlu5v5.png" alt="" className='w-[30px] h-[30px] object-contain' />
            <img src="https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png" alt=""  className='w-[30px] h-[30px] object-contain'  />
        </div>
    </div>

    <div className="task-container overflow-y-scroll p-2 flex gap-2 flex-col h-[80%] no-scrollbar">
        <div className="task-box p-2 transition-all duration-200 ease-in-out   bg-[#E2E3E8] rounded-lg flex justify-start gap-5 hover:bg-[#FE108C] ">
            <div className="img">
                <img src="https://img.freepik.com/premium-vector/instagram-logo-vector_768467-330.jpg" alt="task logo" className='w-[40px] h-[40px] rounded-full'/>
            </div>
            <div className="details font-semibold">Share with 5 friends</div>
        </div>

        <div className="task-box p-2 rounded-md flex justify-start gap-5 transition-all duration-200 ease-in-out bg-[#E2E3E8] hover:bg-blue-400 ">
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s" alt="task logo" className='w-[40px] h-[40px] rounded-full'/>
            </div>
            <div className="details font-semibold">Share with 5 friends</div>
        </div>
    
   
        <div className="task-box p-2 rounded-md flex justify-start gap-5 bg-[#E2E3E8] transition-all duration-200 ease-in-out  hover:bg-[#FE0001]">
            <div className="img">
                <img src='data:image/jpeg;base64,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' alt="task logo" className='w-[40px] h-[40px] rounded-full'/>
            </div>
            <div className="details font-semibold">Like 5 videos</div>
        </div>

   






       
    </div>




   



    <div className="navigation-tab h-[10%] bg-[#2F68FD] w-[100%] flex justify-between items-center p-2 rounded-md">
      <Link to="/"> <button className='text-white flex items-center gap-2'><FaTasks />Taskscreen</button></Link> 
        <Link to="/leader">   <button className='text-white text-sm flex gap-2'><MdLeaderboard size={"20px"} />Leaderboard</button></Link>
    </div>




        </div>

    </div>
  )
}

export default  TaskScreen