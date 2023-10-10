const express = require("express");
const port = 5000;

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:false}))



app.all("/info",(req, res)=>{
  res.send("Enviando info");
})

app.get("/hello/:name",(req, res)=>{
  res.send("Hello "+req.params.name);
})

app.get("/add/:x/:y",(req, res)=>{
const {x,y}=req.params;
let result=(x*1)+(y*1);
res.send("X= "+x+"<br>Y= "+y+"<br>Result= "+result);
})

//SE PUEDE HACER ESTO DE ACA ABAJO
// app.get("/add/:x/:y",({params: { x, y }}, res)=>{

//   let result=(x*1)+(y*1);
//   res.send("X= "+x+"<br>Y= "+y+"<br>Result= "+result);
//   })

//SE PUEDE HACER ESTO DE ACA ARRIBA

app.get("/user/:username/photo",(req, res)=>{
const {username}= req.params;

if(username=="David"){
 return res.sendFile("/static/img/javascript.png",{
    root: __dirname
  });
}
else{
 return res.send("El usuario no tiene acceso a la imagen");
}
})


app.get("/name/:name/age/:age",(req, res)=>{
  console.log(req.query)
  const {name, age}= req.params;
  res.send(` El nombre del usuario es ${name} y su edad es ${age}`)
})


app.get("/search",(req, res)=>{
  const {q}= req.query;
  
  if(q =="javascript"){
    return res.send(`Listas de libros de ${q}`);
  }

  res.send("No se encontraron libros");
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
