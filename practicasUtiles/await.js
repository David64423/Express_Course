/*
NO ANDA EL AWAIT EN ESTE ARCHIVO */

let datos=[{
    id:1,
    nombre:"David"
},
{
    id:2,
    nombre:"Dana"
},
{
    id:3,
    nombre:"Galo"
}]
async function obtenerDatos(){
    await setTimeout(()=>{
        return datos;
    },2000)
    
}
const hola= async ()=>{
    let data= await obtenerDatos();
    await console.log(data); 
} 

hola()