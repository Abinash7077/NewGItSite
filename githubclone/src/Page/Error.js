import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate=useNavigate()
    const goBack=()=>{
        navigate("/")
    }
  return (
    <div className='w-full h-screen bg-slate-500 flex  items-center justify-center '>
        <div className="flex items-center justify-center flex-col">
            <h1 className='text-[45px] text-white'>404 Not Found</h1>
            <button className='text-[20px] text-white rounded-lg bg-orange-500 px-[18px] py-[5px]' onClick={goBack}>Go Back</button>
        </div>
      
    </div>
  );
}

export default Error;
