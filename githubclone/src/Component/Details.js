import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { AiOutlineStar } from "react-icons/ai";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { useSelector } from 'react-redux';

const Details = () => {
    /* const[reposName,setReposName]=useState({})
    const repoName = useSelector((state) => state.reposData);

    const fetchName = () => {
        axios.get(`https://api.github.com/repos/${repoName.repos}`)
        .then((response) => {
          setReposName(response.data);
        });
      };
      useEffect(() => {
        fetchName();
      }, []); */
  return (
    <div className="flex items-center my-2">
    <ul className="flex items-center sm:gap-4 lg-gap-6 justify-between">
      <li className="flex items-center lg-gap-2">
        
        <p className="w-[15px] h-[15px] rounded-full bg-blue-600"></p>
        <p className="sm:text-[13px] font-sans"></p>
      </li>
      <li className="flex items-center  lg:gap-2">
        <AiOutlineStar className="sm:text-[20px]" />
        <p className="lg:text-[13px] font-sans">Watch count</p>
      </li>
      <li className="flex items-center lg-gap-2">
       
        <VscTypeHierarchySuper className="sm:text-[16px]" />
        <p className="sm:text-[13px] font-sans">fork</p>
      </li>
    </ul>
  </div>
  );
}

export default Details;
