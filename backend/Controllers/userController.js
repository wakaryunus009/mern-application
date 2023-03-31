
const User = require("../models/userSchema");

//register user
exports.register = async(req, res)=>{
    try {

        const {name, phno, address, age, department, status, password} = req.body;

        const user = await User.create({name, phno, address, age, department, status, password});

        res.status(201).json({
            message: "Registered",
            user
        })
    } catch (error) {
        res.status(500).json({
            error
        })       
    }
}


//login user
exports.login = async (req, res)=>{
    try {
        const {phno, password} = req.body;

        const user = await User.findOne({phno});
        if(!user){
            return res.json({
                message: "User not found"
            })
        }

        const isMatch = await user.ComparePassword(password);

        if(!isMatch){
            return res.json({
                message: "Invalid login credentials"
            })
        }
        const token = await user.genarateToken();
        let options = {
            expires: new Date(Date.now() + 1000*60*60*24*10),
            httpOnly: true
        }

        res.status(200).cookie("token", token, options).json({
            message: "Login successfull",
            user
        })
        
    } catch (error) {
        res.status(500).json({
            error
        })        
    }
}

//log out
exports.logout = async(req, res)=>{
    try {

        let user = req.user;
        
        let options = {
            expires: new Date(Date.now() + 1000*60*60*24*10),
            httpOnly: true
        }

        res.status(200).cookie("token", null, options).json({
            message: "Logout successfull",
        })
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })        
    }
}

//get profile
exports.profile = async(req, res)=>{
    try {

        const user = await User.findById(req.user._id);
        res.status(200).json({
            user:user
        })
    } catch (error) {
        res.json({
            error
        })        
    }
}

//update user
exports.updateProfile = async(req, res)=>{
    try {

        const {phno, name, password, address, age, department, status} = req.body;

        //fetch user by id
        const user = await User.findById(req.user._id);

        if(phno){
            user.phno = phno;
        }if(name){
            user.name = name;
        }if(address){
            user.address = address;
        }if(department){
            user.department = department;
        }if(status){
            user.status = status;
        }if(password){
            user.password = password;
        }if(age){
            user.age = age;
        }
        await user.save();

        res.status(200).json({
            message: "Profile updated !",
            user
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })        
    }
}

//delete user
exports.deleteProfile = async(req, res)=>{
    try {

        const user = req.user;

        let options = {
            expires: new Date(Date.now()),
            httpOnly: true
        }

        await user.remove();

        res.status(200).cookie("token", null, options).json({
            message: "profile deleted",
        })
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })        
    }
}



//get all user
exports.allUsers = async(req, res)=>{
    try {

        const users = await User.find();
        res.status(200).json({
            users
        })
        
    } catch (error) {
        res.json({
            error
        })        
    }
}