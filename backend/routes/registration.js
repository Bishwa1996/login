const router = require("express").Router();
let Registration = require("../model/registration.model");

router.post("/api/v1/users", async(req,res)=>{
    try{
        const user = new Registration(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch{
        res.status(400).send(e);
    }
});

router.get("/api/v1/users", async(req,res)=>{
    try{
        const UserData = await Registration.find();
        res.send(UserData);
    }catch(e){
        res.send(error);
    }
});

router.put("/api/v1/users/:id", async(req,res)=>{
    try{
const _id = req.params.id;
const updateRegistration = await Registration.findByIdAndUpdate(_id,req.body,
{new:true});
res.end(updateRegistration);
    }catch(e){
res.status(400).send(e);
    }
});

router.delete("/api/v1/users/:id", async(req,res)=>{
    try{
const _id = req.params.id;
const deleteRegistration = await Registration.findByIdAndDelete(_id,req.body);
res.end(deleteRegistration);
    }catch(e){
res.status(400).send(e);
    }
});

module.exports = router;