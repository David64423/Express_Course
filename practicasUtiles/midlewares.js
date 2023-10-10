const express = require("express");
const morgan= require("morgan");
const port = 5000;

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:false}))


  //console.log(`Url: ${req.url}, method: ${req.method}`);
app.use(morgan("dev"));

app.use((req,res, next)=>{
  const {loggin}= req.query;

if(loggin=="david@gmail.com"){
  next();
}
else{
  return res.send("No autorizado");
}
})

app.get("/dashboard",(req, res, next)=>{
 res.send("Dashboard page"); 

})

app.get("/profile",(req, res)=>{
  res.send("Profile page");
});

app.get("/about",(req, res)=>{
  res.send("About page");
})




app.use((req, res)=>{
  res.send("<h1>No se encontro tu pagina capo</h1>");
  
})

const onPortListen = (port) => {
  return new Promise((resolve, reject) => {
    app.listen(port);
    resolve(port);
  });
};

onPortListen(port)
  .then((port) => {
    console.log(`Server on Port ${port} \nEl servidor `);
  })
  .catch((err) => {
    console.log("Hay un error \nEl servidor no ");
  })
  .finally(() => {
    console.log("deberia estar disponible");
  });
