const express=require("express")
const cors=require('cors')
const fetch=(...args)=>
import('node-fetch').then(({default:fetch})=>fetch(...args));
const bodyParser=require("body-parser")
const CLIENT_ID="9f7df7c78d203a4237d3"
const CLIENT_SECRET="f43d8d0c026a177d0b9fa3a3d1cd96f58a3d2d9a";
const app=express()
app.use(cors())
app.use(bodyParser.json());
app.get('/getAccessToken',async function(req, res){
  console.log(req.query.code);
  const params="?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;
  await fetch("https://github.com/login/oauth/access_token" + params,{
    method:"POST",
    headers:{
      "Accept":"application/json"
    }
  }).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data)
    res.json(data)
  })
});
//get user data
app.get("/getUserData", async function(req,res){
  req.get("Authorization");
  await fetch("https://api.github.com/user",{
    method:"GET",
    headers:{
      "Authorization":req.get("Authorization")

    }
  }).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data)
    res.json(data)
  })
})


app.listen(4000,function (){
  console.log("Server is running on port 4000")
})
