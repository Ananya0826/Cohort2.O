//server create krna
//server ko config krna
const express=require("express");
const app=express();
app.use(express.json());
const notes=[
    // {
    //     title:"test title 1",
    //     description:"test description 1"
    // }
]
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    console.log(notes);
    
    res.send('node created');
})
app.get('/notes',(req,res)=>{
    res.send(notes);
})
//delete /notes
//params
//delete/notes/2
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("node deleted")
})
//patch/notes/:index
//req.body={description:}
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description=req.body.description;
    res.send("updated successfully");
})
module.exports=app