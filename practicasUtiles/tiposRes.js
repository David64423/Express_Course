app.get("/", (req, res) => {
    res.send("Hello World");
  });
  
  app.get("/miarchivo", (req, res) => {
    res.sendFile("./static/img/javascript.png", {
      root: __dirname,
    });
  });
  
  app.get("/user", (req, res) => {
    res.json({
      nombre: "David",
      lastName: "Lopéz",
      age: 20,
      points: [1, 2, 3],
      adress: {
        city: "Quilmes",
        street: "Some Street 123",
      },
    });
  });
  
  app.get('/isAlive',(req, res)=>{
    res.sendStatus(204);
  })