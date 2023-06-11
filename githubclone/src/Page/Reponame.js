import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Header from "../Component/Header";
import { AiOutlineStar } from "react-icons/ai";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { RxTriangleDown } from "react-icons/rx";

const Reponame = () => {
    const[newData,setNewData]=useState({})
    const newName = useSelector((state) => state.reposData);
    const fetchDatas = () => {
        axios.get(`https://api.github.com/repos/${newName.repos}`)
        .then((response) => {
          setNewData(response.data);
        });
      };
      useEffect(() => {
        fetchDatas();
      }, []);


  const theme = useSelector((state) => state.darker);
  return (
    <>
      <Header />
      <div
        className={
          !theme.show
            ? `w-full h-screen bg-white flex items-center justify-center`
            : `w-full h-screen flex items-center justify-center bg-slate-500`
        }
      >
        <div className="border-2 border-solid border-slate-400 w-2/5 h-2/5 flex items center justify-between">
          <div className="w-[50%] flex flex-col items-center justify-center">
            <h1
              className={
                theme.show
                  ? `text-[26px] text-slate-700    `
                  : `text-[26px] text-slate-500`
              }
            >
              {newData.full_name}
            </h1>
            <p
              className={
                theme.show
                  ? `text-[26px] text-white border-2 border-solid border-slate-300 rounded-lg sm:px-12 flex items-center gap-1 px-8    `
                  : `text-[16px] text-slate-500 border-2 border-solid border-slate-300 rounded-lg sm:px-12 flex items-center gap-1 px-8 `
              }
            >
              {newData.created_at}
            </p>
          </div>
          <div className="flex item-center justify-center flex-col pr-8">
          <ul className="flex items-center justify-center flex-col sm:gap-4 lg-gap-6 justify-between">
                <li className="flex items-center justify-between border-2 w-[160px] px-2  border-solid border-black rounded-lg text-[20px] lg-gap-2">
                  
                  <RxTriangleDown className="sm:text-[25px]"/>
                  <p className="sm:text-[20px] flex items-center  font-sans">language <span className="text-[14px] text-blue-900 px-2 py-1 ml-1 bg-zinc-200">{newData.language}</span> </p>
                </li>
                <li className="flex items-center justify-between  w-[160px] px-2 border-2 border-solid border-black rounded-lg text-[20px] lg-gap-2">
                  <AiOutlineStar className="sm:text-[20px]" />
                  <p className="sm:text-[20px] justify-between flex items-center font-sans">Watchers
                  <span className="text-[14px] text-blue-900 px-2 py-1 ml-1 bg-zinc-200">{newData.watchers}</span></p>
                </li>
                <li className="flex items-center justify-between  w-[160px] px-2 border-2 border-solid border-black rounded-lg text-[20px] lg-gap-2">
                 
                  <VscTypeHierarchySuper className="sm:text-[16px]" />
                  <p className="sm:text-[20px] font-sans">Forks<span className="text-[14px] text-blue-900 px-2 py-1 ml-1 bg-zinc-200">{newData.stargazers_count}</span></p>
                </li>
                <li className="flex items-center justify-between  w-[160px] px-2 border-2 border-solid border-black rounded-lg text-[20px] lg-gap-2">
                 
                 <VscTypeHierarchySuper className="sm:text-[16px]" />
                 <p className="sm:text-[20px] font-sans"> Branch
                 <span className="text-[14px] text-blue-900 px-2 py-1 ml-1 bg-zinc-200">{newData.default_branch}</span></p>
               </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reponame;
