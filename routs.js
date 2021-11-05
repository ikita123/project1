const express=require("express");
const fs=require("fs")
// get method
const router=express.Router();
let users=require("./courses.json")
// console.log(users);
router.get('/',(req,res)=>{
    res.send(users) 
})
// post method
router.post("/",(req,res)=>{
    // console.log(req)
    const user=req.body;
    users.push(user);
    res.send(`user with the name ${user.name} added`)
    fs.writeFileSync('courses.json',JSON.stringify(users, null, 4))
})
router.get("/:id",(req,res)=>{
    const {id}=req.params;
    const  found=users.find((user)=> user.id===id);
    if(found){
        res.send(found) 
    }else{
        res.send(`id is not found in database`)

    }
})
 // delete method
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.id!=id)
    res.send(`user with the id ${id} delete from databases`)
    fs.writeFileSync('courses.json',JSON.stringify(users,null,4))
})
// put method
router.put('/:id',(req,res)=>{
    const id=req.params.id
    const data=users.find((user)=>user.id===id)
    if(data){
        data.name=req.body.name
        data.logo=req.body.logo 
        data.notes=req.body.notes
        data.days_to_complete=req.body.days_to_complete
        data.short_description=req.body.short_description
        data.type=req.body.type
        data.lang_available=req.body.lang_available
        fs.writeFileSync('courses.json',JSON.stringify(users,null,4))
        res.send(`the  course ${id} is updated`)
    }else{
        res.send(`the id is not updated`)
}
})
module.exports=router;
