const mysql=require('mysql2/promise');


async function connectDB(){
   const conection= await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'cursoExpress'
    });
    const result = await conection.query('insert into users(nameUser) values("David")');

    console.log(result);
}

module.exports= connectDB