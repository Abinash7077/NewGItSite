import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    const SignInHandler=async(e)=>{
        e.preventDefault()
     navigate('/Repo')
        
    }

    const [user, setUser] = useState(null);
const [loggedIn, setLoggedIn] = useState(false);
const [githubUrl, setGithubUrl] = useState("");
useEffect(() => {
  const token = new URLSearchParams(window.location.search).get(
    "access_token"
  );
  axios
    .get("http://localhost:8080/user/data", {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      setUser(res.data);
      setLoggedIn(true);
     
    })
    .catch((error) => {
      console.log(error);
    });
    const gitHubUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=http://localhost:8080/oauth/redirect`;
    setGithubUrl(gitHubUrl);
}, []);
  return (
    <>
    {
        (!loggedIn)?
        <div className='h-screen w-full flex mt-16 justify-center bg-[#fff] '>
        <div className="flex flex-col">
            <div className="flex items-center justify-center">
                <AiFillGithub className='text-[60px]'/>
            </div>
            <h1 className='flex items-center justify-center text-[30px] font-sans font-light my-7'>Sign in to GitHUb</h1>
            <div className=" bg-[#f7f7f7] shadow-md w-[350px] h-fit border-1 border-solid border-gray-400 text-left px-6 py-6 rounded ">
                <form action="" className='font-sans'>
                    <label htmlFor="Username" className='font-sans text-[16px]'>Username or email address</label>
                    <input type="text" className='w-full border-2 my-6 border-solid border-gray-200 h-[30px] px-4 text-[16px]' />
                    <div className=" flex justify-between">
                    <label htmlFor="Username" className='font-sans text-[16px]'>Password</label> <label htmlFor="Username" className='font-sans text-[var(--color-blue)]  text-[16px]'>Forgot password?</label> 
                    </div>
                    <input type="text" className='w-full border-2 my-6 border-solid border-gray-200 h-[30px] text-[16px]px-4' />
                    <button className="w-full rounded-md text-[16px] text-white h-[30px] bg-[var(--color-green)]" href={githubUrl} onClick={SignInHandler}>Sign in</button>
                </form>
            </div>
        </div>

     
    </div>: <div><h1>Login</h1></div>
    }
   
    </>
  );
}

export default Login;
