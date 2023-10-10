

function promesa(){
    return new Promise((resolve, reject)=>{
        console.log("Iniciando proceso");
        setTimeout(()=>{
            resolve("Hello World")
        },2000)
    })
}

promesa().then((data)=>{
    return new Promise((resolve, reject)=>{
        console.log("Hello Wods")
        setTimeout((data)=>{
    resolve("Hello Wods")},10000)
    })

}).then((data)=>{
    console.log("Acabando proceso");
})