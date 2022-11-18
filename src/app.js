import express from "express";

import { createPool } from "mysql2/promise";

 

const pool=createPool({

    user:'root',
    password:'2qq3K4NB7F1c7hGdp66b',
    host:'containers-us-west-118.railway.app',
    port:6692,
    database:'railway'
})

const app=express()

app.get('/',(req,res)=>{

  res.send("Bienvenido a este servidor..")      

})

app.get('/usuarios',async (req,res)=>{

    const [result]=await pool.query('select * from usuario')

    res.json(result[2])      

  })

 
  app.get('/agregarusuario',async (req,res)=>{

    const nombre=req.query.no

    const contrasena=req.query.contrasena

    const correo=req.query.correo

    const tienda=req.query.tienda  

    const [result]=await pool.query(`INSERT INTO usuario (no, contrasena, correo, tienda) VALUES ('${no}', '${contrasena}', '${correo}','${tienda}')`)

    res.json(result[0])      

  })

 
app.listen(process.env.PORT || 3000)

console.log("Servidor corriendo en el puerto 3000")
