const express = require("express");
const path = require("path");
const morgan= require("morgan");
const HomeRoutes= require("./routes/home");
const UserRoutes= require("./routes/users");
require("ejs");

//import {newFunction} from "./";



const app = express();
app.set('port',5000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:false}))
app.use(morgan("dev"));
app.use(HomeRoutes);
app.use(UserRoutes);
//console.log(`Url: ${req.url}, method: ${req.method}`);






//app.use(express.static("./static"))

app.use('/',express.static(path.join(__dirname,"static")));



app.use((req, res)=>{
  res.send("<h1>No se encontro tu pagina capo</h1>");
   
})

app.listen(app.get("port"),()=>{
  console.log("Server on port "+app.get("port"))
})  