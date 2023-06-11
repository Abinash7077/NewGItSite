import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Authe = () => {
 
    const navigate=useNavigate()
    const clickUrl=()=>{
navigate("/Login")
    }

//fetch oauth


    
  return (
    <>
  
  <div className="w-full min-h-screen bg-[var(--color-main)] text-white h-screen flex items-center justify-center" >
    <div className="">
    <h1 className='text-6xl'>GitHub</h1>
    <nav>
    <ul className='my-10 '>
    <li className=' py-2 px-16 hover:bg-orange-400 rounded-xl bg-transparent border-2 border-solid border-gray-600'>
  <button  className="text-4xl "  onClick={clickUrl} >Login</button>
    </li>
   </ul>
    </nav>

    </div>
  </div>
    </>
    
  );
}

export default Authe;
