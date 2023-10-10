let datos=0;

function promesa(){
    return new Promise((resolve, reject)=>{
        if(datos==1){
            reject(new Error("Datos es igual a 1"));
        }
        
        setTimeout(()=>{
            datos=23;
            resolve(datos);
        },1500)
    
    
    });

}

promesa().then((datos)=>{console.log(datos)});