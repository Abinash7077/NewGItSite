import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { darkLight } from "../redux/darkSlide";
import { useSelector } from "react-redux";


const Header = () => {
  const gitDatas=useSelector((state)=>state.GitName)
  console.log("git",gitDatas.gitName)

  const [show, setShow] = useState(false);
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(darkLight({
      show:show
    }))
  },[show])

  return (
    <div className="bg-[var(--color-heading2)] px-[45px] flex items-center justify-between w-full p-[16px] ">
      <div className="icon ">
        <AiFillGithub className="text-[40px] text-white" />
      </div>
      <div className=" flex items-center justify-between gap-4">
        <div className="flex gap-0">
          <img
            src="img/1.png"
            className="w-[27px] h-[27px] rounded-full"
            alt=""
          />
          <p className="text-white text-[16px]">{gitDatas.gitName}</p>
          <RxTriangleDown className="text-white text-[28px]" />
        </div>

        {show ? (
          <MdOutlineNightlight
            className="text-white text-[28px]"
            onClick={() => setShow(false)}
          />
        ) : (
          <CiLight
            className="text-white text-[28px]"
            onClick={() => setShow(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
