const express = require("express");
const port = 5000;
const app = express();

app.get(`/`, (req, res) => {
    res.send("<h1>Wuenasssss</h1>");
});

app.get(`/about`, (req, res) => {
    res.send("<h1>Aboutjj</h1>");
});

app.get(`/weather`, (req, res) => {
    res.send("<h1>The current weather is nice</h1>");
});

app.use((req,res)=>{
    res.status(404).send("<h1>No se encontro tu página</h1>");
})

const onPortListen = async (port) => {
    return new Promise((resolve, reject) => {
        app.listen(port);
            
        resolve(port);  // Resuelve la promesa con el puerto
        
    });
};

onPortListen(port)
    .then((datos) => {
        console.log(`Server On Port ${datos}`);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
