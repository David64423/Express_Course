const express = require("express");
const port = 5000;

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:false}))

app.post('/user',(req, res)=>{
  console.log(req.body);
  res.sendStatus(204);
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
