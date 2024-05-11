const dbConnect=require('./mongodb')
const express=require('express');
const app=express();
app.use(express.json())
//get
app.get('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.find().toArray()
    res.send(result);
})
//post
app.post('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.insertOne(req.body);
    res.send("Data Inserted Successfully")
})
//put
app.put('/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.updateOne({name:req.params.name},{$set:req.body})
    res.send("Data Updated Successfully")
})
//delete
app.delete('/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.deleteOne({name:req.params.name})
    res.send("Data DeleSted Successfully")
})
app.listen(3000);