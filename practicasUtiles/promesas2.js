function promesa(){
    return new Promise((resolve, reject)=>{
        console.log("Inicializando Proceso");
        setTimeout(()=>{
            console.log("Primera parte finalizada");
            resolve("Hello World")
        },2000)
    })
}

promesa().then((data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout((data)=>{console.log(data)
        resolve(data)},1500);
        
    })
    
}).then((data="ds")=>{
    console.log("Segunda parte empezando");
    
    return new Promise((resolve, reject)=>{
        setTimeout((data)=>{
            console.log("Tercera parte finalizada")
            resolve(data)
        },1000)
    })
    
}).finally((data)=>{
    let datos= data;
    setTimeout((datos)=>{
        console.log("Cerrando Consola");
        console.log(datos);
    },2000)
})