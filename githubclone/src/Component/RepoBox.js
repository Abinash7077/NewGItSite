import React, { useState, useEffect } from "react";
import { GoRepo } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { RxTriangleDown } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { repoData } from "../redux/repoSlide";
import Details from "./Details";

const RepoBox = ({ id, name, desc }) => {
  /* const[reposName,setReposName]=useState({}) */
  const theme = useSelector((state) => state.darker);
  const dispatch = useDispatch();
  const repoName = useSelector((state) => state.reposData);
 


 /*  const fetchName = () => {
    axios.get(`https://api.github.com/repos/${repoName.repos}`)
    .then((response) => {
      setReposName(response.data);
    });
  };
  useEffect(() => {
    fetchName();
  }, []);
  console.log(reposName.language) */
  //name dispatch and nagivate to repo name

  const navigate = useNavigate();
  const repoClick = (e) => {
    e.preventDefault();

    dispatch(
      repoData({
        repos: name,
      })
    );
    navigate("/Repo/Reponame")
  };
  console.log();

  return (
    <>
      <div
        className={
          theme.show
            ? `border-b-2 flex items-center justify-between border-solid border-[var(--color-trending-border)] p-[18px] h-fit font-sans`
            : `border-b-2 flex items-center justify-between border-solid shadow-lg p-[18px] h-fit font-sans`
        }
        key={id}
      >
        <div className="text-start w-[65%]">
          <div className="flex items-center ">
            <GoRepo className=" sm:text-[16px] lg:text-[20px] " />
            <h2
              className=" sm:text-[16px] text-[14px] lg:text-[25px] text-[var(--color-blue2)]  ml-4 font-sans cursor-pointer"
              onClick={repoClick}
            >
              {name}
            </h2>
          </div>
          <p className="sm:text-[11px] md:text-[13px] lg:text-[16px] text-gray-600 font-sans">
            {desc}
          </p>
          
     {/* details section */}
     <Details/>
        </div>
        <div className="">
          <ul className="flex flex-col justify-between gap-12">
            <li className="flex border-2 items-center border-solid border-[var(--color-trending-border)] rounded-lg px-4 pr-2 py-1 bg-gray-100">
              <AiOutlineStar className="sm:text-[20px]" />
              <p className=" ml-3 sm:text-[16px] border-r-2 border-solid border-trending-border pr-4">
                Star
              </p>
              <RxTriangleDown className="text-black text-[28px]" />
            </li>
            <li className="flex items-center">
              <AiOutlineStar className="sm:text-[20px] text:[16px]" />
              <p className=" text-[14px] sm:text-[16px]">
                <span className="text-[14px]">stars today</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
     
    </>
  );
};

export default RepoBox;
