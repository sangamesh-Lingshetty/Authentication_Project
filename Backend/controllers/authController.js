const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const UserModel = require("../modules/user")

const signup = async (req,res)=>{
    try{
        const {name,email,password}= req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(400).json({message:"user already exit u can login",success:false})
        }

        const usemodel = new UserModel({name,email,password});
        usemodel.password = await bcrypt.hash(password,10);
        await usemodel.save();

        res.status(201).json({message:"signup successfull",success:true})

    }catch(error){
        res.status(500).json({
            message:'internal server error',
            success:false
        })
    } 
}

const login = async (req,res)=>{
    try{
        const {email,password}= req.body;
        const user = await UserModel.findOne({email});
        const errromsg = "Please register to Socio.";
        if(!user){
            return res.status(403).json({message:errromsg,success:false})
        }
        const ispassequal = await bcrypt.compare(password,user.password);
        if(!ispassequal){
            return res.status(403).json({message:"password not matching..check your password",success:false})
        }

        const jwtToken = jwt.sign(
            {email : user.email, _id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )


        res.status(200)
        .json({
            message:"login successfull",
            success:true,
            jwtToken,
            email,
            name:user.name
        })

    }catch(error){
        res.status(500).json({
            message:'internal server error',
            success:false
        })
    } 
}




module.exports={
    signup,
    login
}