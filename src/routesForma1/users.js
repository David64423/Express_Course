
const UserRoutes=(app)=>{
    app.get("/profile",(req, res)=>{
        res.send("Profile page");
      });
      
    
    app.get("/UserName",(req, res)=>{
        res.send("Username Page");
    });
}

module.exports= UserRoutes;