const { Router } = require("express");
const router = Router();

router.get("/dashboard", (req, res, next) => {

  const titlePage="This is the dashboard page";


  res.render("Dashboard",{title:titlePage});
});

router.get("/about", (req, res) => {

  const title="About me";

  res.render('about',{title});
});

router.get('/',(req, res)=>{


  const title="Index Page";
  const isActive=true;
  const users=[
    {
      id:1,
      name:"David",
      lastName:"López",
    },
    {
      id:2,
      name:"Juan",
      lastName:"Gomez",
    },
    {
      id:3,
      name:"Carlos",
      lastName:"Villagram",
    }

  ];
  
  res.render("index",{title,isActive, users})
})

module.exports = router;
