import React,{useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gitData } from '../redux/authSlide';
const CLIENT_ID="9f7df7c78d203a4237d3"


const Authe = () => {
  const dispatch=useDispatch()
  const[render,setRender]=useState(false)
  const[userData,setUserData]=useState({})
  useEffect(()=>{
    const queryString=window.location.search
    const urlParams=new URLSearchParams(queryString)
    const codeParam=urlParams.get("code")
    console.log(codeParam)
    if(codeParam && (localStorage.getItem("accessToken")===null)){
      async function getAccessToken(){
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam,{
          method:"GET"
        }).then((response)=>{
          return response.json()
        }).then((data)=>{
          console.log(data);
          if(data.access_token){
            localStorage.setItem("accessToken",data.access_token)
          
          }
        })
          
        
      }
      getAccessToken()
    }
  },[])
  async function getUserData(){
    await fetch("http://localhost:4000/getUserData",{
      method:"GET",
      headers:{
        "Authorization":"Bearer" + localStorage.getItem("accessToken")
      }
    }).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data)
      setUserData(data)
    })
  }
  useEffect(()=>{
   getUserData()

  })
  useEffect(()=>{
    dispatch(gitData({
      user:userData.name
    }))
  },[userData])
  console.log(userData)
 
    const navigate=useNavigate()
    const clickUrl=()=>{
/* navigate("/Login") */
window.location.assign("https://github.com/login/oauth/authorize?client_id=" +CLIENT_ID);
    }

//fetch oauth


    
  return (
    <>
    {
      localStorage.getItem("accessToken")?
      <>
      <h1>Login sucessfull</h1>
      <button >
        Redirect
      </button>
      {Object.keys(userData).length !==0? <h4>Hey There {userData.login}</h4>:<></>
      }
      </>
      :<>
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
    }
  
 
    </>
    
  );
}

export default Authe;
