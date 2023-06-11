import React,{useEffect, useState} from 'react';
import {RxTriangleDown } from 'react-icons/rx';
import RepoBox from './RepoBox';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';

const TrendingRepo = () => {
    const[repo,setRepo]=useState([])
    const[page,setPage]=useState(1)
    const[postPerPage,setPostPerPage]=useState(10)
    const theme=useSelector((state)=>state.darker)
    const fetchRepo = () => {
        axios.get("https://api.github.com/repositories")
        .then((response) => {
          setRepo(response.data);
        });
      };
      useEffect(() => {
        fetchRepo();
      }, []);

      const selectPageHandler=(selectPage)=>{
        if(selectPage>=1 && selectPage<=repo.length/5 && selectPage!= page)
        setPage(selectPage)
      }
    
  return (
    <div className={theme.show?`bg-white w-full h-fit`:`bg-slate-400 pt-20 w-full h-fit`}>
    <div className={theme.show?`w-4/5 my-2 mt-20 mx-auto rounded-xl h-[450px] border-2 border-solid border-[var(--color-trending-border)] h-fit`:`w-4/5   mx-auto rounded-xl h-[450px] border-2 border-solid border-gray-300 bg-gray-200  h-fit`}>
        <div className=" py-[12px] sm:py-[16px] w-full flex bg-[var(--color-trending-bg)] items-center border-b-2 border-solid border-[var(--color-trending-border) text-[18px]] pr-[20px] justify-between">
            <div className="ml-[15px] ">
                <ul className='flex items-center '>
                    <li className=' text-white text-[17px] py-2  px-6 rounded-lg rounded-r-none bg-[var(--color-blue2)]'>Repositories</li>
                    <li className=' text-[16px] py-2 px-6 rounded-lg border-2 border-solid border-[var(--color-trending-border)] rounded-l-none '>Developers</li>
                </ul>
            </div>
            <div className="hidden sm:flex">
                <ul className='flex items-center justify-between lg:gap-8 sm:gap-2'>
                    <li className='flex lg:text-[17px] sm:text-[12px] items-center text-gray-400 '>Spoken Language: <span className='flex text-black items-center'>Any <RxTriangleDown className='text-black sm:text-[20px] lg:text-[28px]' /></span> </li>
                    <li className='flex lg:text-[17px] sm:text-[12px]    items-center text-gray-400 '>Language: <span className='flex text-black items-center'>Any <RxTriangleDown className='text-black sm:text-[20px] lg:text-[28px]' /></span> </li>
                    <li className='flex lg:text-[17px] sm:text-[12px]  items-center text-gray-400 '>Date range: <span className='flex text-black items-center'>Today <RxTriangleDown className='text-black sm:text-[20px] lg:text-[28px]' /></span> </li>
                </ul>
            </div>
        </div>
       {
        repo.slice(page * 10 - 10, page * 10).map((item)=>(
            <RepoBox
           id={item.id}
           name={item.full_name}
           desc={item.description}
           
            />
            
        ))
       }
         <div className="my-6">
            <span className={(page>1)?`px-6 py-2 text-[16px] border-2 border-solid rounded-lg cursor-pointer rounded-r-none border-gray-700`:`hidden`} onClick={()=>selectPageHandler(page-1)}>prev</span>
            {[...Array(repo.length / 10)].map((_,i)=>{
                return  <span className={(page===i+1)?`bg-slate-300 px-6 py-2 text-[16px] border-t-2 border-b-2  text-green-700 border-solid border-l-2 cursor-pointer border-gray-300`:`px-6 py-2 text-[16px] border-t-2 border-b-2 border-r-2 border-solid border-l-2 cursor-pointer border-gray-300`} onClick={()=>selectPageHandler(i+1)} key={i}>{i+1}</span>
                
            })}
            
            <span className={(page<repo.length/10)?`px-6 py-2 text-[16px] border-2 border-solid rounded-lg rounded-l-none cursor-pointer border-gray-700`:`hidden`} onClick={()=>selectPageHandler(page+1)}>Next</span>
        </div>
      

           
       
      
      
    </div>
    </div>
  );
}

export default TrendingRepo;
