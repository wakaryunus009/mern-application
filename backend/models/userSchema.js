const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"]
    },
    phno:{
        type: String,
        required: [true, "number is required"],
    },
    address: {
        type: String,
        
        // required: [true, "address is required"],
    },
    lat: {
        type: Number,
        default: Math.random()*100
    },
    long: {
        type: Number,
        default: Math.random()*100
    },
   age: {
        type: String,
        // required: [true, "age is required"],
       
    },
    department: {
        type: String,
        // required: [true, "department is required"],
    },
    status: {
    //    Rlocation:String,
    //    ContractEmp:String,
    //    Fulltime:Boolean
    type: String
    },
    password:{
        type: String,
        required: true
    }
})

//hash user password while save
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 8);
    }

    next();
})

//compare hashed password and user enetered password
userSchema.methods.ComparePassword = async function(pass){
    return await bcrypt.compare(pass, this.password);
}

//genarate token while login
userSchema.methods.genarateToken = async function(){
    return await jwt.sign({_id:this._id}, process.env.SECRET_KEY);
}

const User = mongoose.model("User", userSchema);
module.exports = User;