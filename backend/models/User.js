import mongoose from "mongoose"
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    //email:{type:String,unique:true,required:false},
    number:{type:String,required:true,unique:true},
  //  password:{type:String,required:false},
   role:{
        type:String,
        enum:["passenger","driver"],
        default:"passenger"
    },
    isOnline:{
        type:Boolean,
        default:false,
    },
    location:{
        lat:Number,
        lng:Number,
    },
},
{ timestamps: true }
)
export default mongoose.models.User || mongoose.model("User",UserSchema)