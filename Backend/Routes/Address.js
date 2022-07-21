const {Router}=require("express")
const mongoose=require("mongoose")

const Addressdata=Router()


const Address=require("../Mongo/Address")


Addressdata.post("/address/:username",async(req,res)=>{
    const{address1,address2,city,pincode}=req.body
    const{username}=req.params

    let data=new Address({
        username:username,
        address1,
        address2,
        city,
        pincode
    })
    
    await data.save()

    res.send({data:data,message:"successfull"})
})

Addressdata.get("/address/:username",async(req,res)=>{
    const{username}=req.params
    let data=await Address.findOne({username})

    res.send({data:data,message:"addressdata"})
})


module.exports=Addressdata;