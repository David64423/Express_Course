let i=0;
function promesa(){   
    return new Promise((resolve, reject)=>{
        if(i==1){
            reject(new Error("Algo esta mal"));
        }
        
        resolve(7878)})
    
}

promesa().then((datos)=>{
    console.log(datos);
}).catch(err=>{
    console.log("esta variacion da error");
})