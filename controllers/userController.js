const User = require("../models/Users")


const getAllUser = async(req,res)=>{
    try{
        const user = await User.find({})
        res.status(200).json({user})
    }catch(error){
        res.status(500).json({error})
    }
}

const createUser = async(req,res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(200).json({user})
    }catch(error){
        res.status(500).json({error})
    }
}

const udpateUser = async(req,res)=>{
    console.log(req.body)
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body)
        if(!user){
            res.status(404).json({message:'User Not Found'})
        }
        res.status(200).json({message:'User Updated Successfully'})

    }catch(error){

    }
}

const deleteUser = async(req,res)=>{
    
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            res.status(404).json({message:'User not found'})
        }
        res.status(200).json({message:'User Deleted Successfully'})
        
    }catch(error){
        res.status(500).json({error})
    }
}

module.exports ={createUser, getAllUser, deleteUser, udpateUser}