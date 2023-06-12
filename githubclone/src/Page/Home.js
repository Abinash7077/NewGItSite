import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
    const clickTLogin=()=>{
navigate('/login')
    }
  return (
    <div className="w-full min-h-screen bg-[var(--color-main)] mb-12 text-white h-screen flex items-center justify-center" >
    <div className="">
    <h1 className='text-6xl'>WelCome to Github Repository site</h1>
   
    <nav>
    <ul className='my-10 '>
    <li className=' py-2 px-16 hover:bg-orange-400 rounded-xl bg-transparent border-2 border-solid border-gray-600'>
  <button  className="text-4xl "  onClick={clickTLogin} >Go To Login Page</button>
    </li>
   </ul>
    </nav>

    </div>
  </div>
  );
}

export default Home;
