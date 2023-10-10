function HomeRoutes(app){
    app.get("/dashboard",(req, res, next)=>{
    res.send("Dashboard page"); 
   
   })
   

   app.get("/about",(req, res)=>{
     res.send("About page");
   })
}

module.exports= HomeRoutes;