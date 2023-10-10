const {Router}= require("express");
const axios= require('axios');

const router= Router();

router.get("/profile",(req, res)=>{
    res.send("Profile page");
  });
  

router.get("/UserName",(req, res)=>{
    res.send("Username Page");
});


router.get("/users",(req,res)=>{
  res.render("users");
})


router.get("/posts",async (req, res)=>{
  const response=await axios.get('https://jsonplaceholder.org/users')
  console.log(response.data);
  const users=response.data;
  res.render("post",{users})
})

module.exports=router;