import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Header from "../Component/Header";
import { AiOutlineStar } from "react-icons/ai";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { RxTriangleDown } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";


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
                  ? `text-[26px] font-sans font-extrabold text-slate-700    `
                  : `text-[26px] font-sans font-extrabold text-slate-500`
              }
            >
              {newData.full_name}
            </h1>
            <p
              className={
                theme.show
                  ? `text-[18px] my-2 text-white border-2 border-solid border-slate-300 rounded-lg sm:px-12 flex items-center gap-1 px-8    `
                  : `text-[16px] my-2 text-slate-500 border-2 border-solid border-slate-300 rounded-lg sm:px-12 flex items-center gap-1 px-8 `
              }
            >
              {newData.created_at}
            </p>
            <p
              className={
                theme.show
                  ? `text-[18px] text-white border-2 border-solid border-slate-300 rounded-lg sm:px-12 flex items-center gap-1 px-8    `
                  : `text-[16px] text-slate-500 border-2 border-solid border-slate-300 rounded-lg sm:px-12 flex items-center gap-1 px-8 `
              }
            >Language: &nbsp;
              {newData.language}
            </p>
            <p
              className={
                theme.show
                  ? `text-[18px] my-2 text-white border-2 border-solid border-slate-300 rounded-lg sm:px-12 flex items-center gap-1 px-8    `
                  : `text-[16px] my-2 text-slate-500 border-2 border-solid border-slate-300 rounded-lg sm:px-12 flex items-center gap-1 px-8 `
              }
            >
              Branch: &nbsp;
              {newData.default_branch}
            </p>
          </div>
          <div className="flex item-center justify-center flex-col pr-8">
          <ul className="flex items-center justify-center flex-col sm:gap-4 lg-gap-6 justify-between">
                <li className="flex items-center justify-between border-2 w-[160px] pl-2   border-solid border-black rounded-lg text-[20px] lg-gap-2">
                  
                  <RxTriangleDown className="sm:text-[25px]"/>
                  <p className="sm:text-[17px] flex items-center  font-sans">Subscriber &nbsp; <span className="text-[14px] rounded-r-lg text-blue-900 px-2 py-1 ml-1 bg-zinc-200">{newData.subscribers_count}</span> </p>
                </li>
                <li className="flex items-center justify-between  w-[160px] pl-2 border-2 border-solid border-black rounded-lg text-[20px] lg-gap-2">
                  <AiOutlineEye className="sm:text-[20px]" />
                  <p className="sm:text-[17px] justify-between flex items-center font-sans">Watchers &nbsp;
                  <span className="text-[14px] text-blue-900 rounded-r-lg  px-2 py-1 ml-1 bg-zinc-200">{newData.watchers}</span></p>
                </li>
                <li className="flex items-center justify-between  w-[160px] pl-2 border-2 border-solid border-black rounded-lg text-[20px] lg-gap-2">
                 
                  <VscTypeHierarchySuper className="sm:text-[16px]" />
                  <p className="sm:text-[17px] justify-between flex items-center font-sans font-sans">Forks &nbsp;<span className="text-[14px] text-blue-900 px-2 rounded-r-lg  py-1 ml-1 bg-zinc-200">{newData.forks_count}</span></p>
                </li>
                <li className="flex items-center justify-between  w-[160px] pl-2 border-2 border-solid border-black rounded-lg text-[20px] lg-gap-2">
                 
                 <VscTypeHierarchySuper className="sm:text-[16px]" />
                 <p className="sm:text-[17px] justify-between flex items-center font-sans  font-sans"> Star &nbsp;
                 <span className="text-[14px] text-blue-900 px-2 rounded-r-lg  py-1 ml-1  bg-zinc-200">{newData.stargazers_count}</span></p>
               </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reponame;
