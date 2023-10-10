app.get('/products',(req,res)=>{
    // validate datos
    // consultar una bd
    // procesar datos
res.send("Lista de Productos");
})

app.post('/products',(req,res)=>{
    res.send("Creando Productos");
})

app.put('/products',(req,res)=>{
    res.send("Actualizando Productos");
})

app.delete('/products',(req,res)=>{
    res.send("Borrando Productos");
})

app.patch('/products',(req,res)=>{
    res.send("Usando Patch");
})
