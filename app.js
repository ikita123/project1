const express=require("express");
const bodyParser=require("body-parser");
const usersRoutes=require('./routs.js')
const app=express();
const PORT=6000;
app.use(bodyParser.json());
app.use('/users',usersRoutes);
app.get("/",(req,res)=>res.send("hello from homepage"));
app.listen(PORT,()=>console.log(`server Running on port:http://localhost:${PORT}`))


