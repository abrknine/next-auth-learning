import mongoose from "mongoose";

//rem  newobj of mongoose.Schema accepts an object inside it (which is the schema of the collection)
//userSchema is mad ein all ap that want to aqire users these are the fields that will be in the
// collection for signup and login nothing more maybe u can use this saved data of user to show on profile page but signup is entry point 
//of new user to save his data in db and login is to check if user is already in db or not

const userSchema= new mongoose.Schema({
   username: {
      type: String,
      required: [true,'PLease provide username']   ,
      unique: true     
   },
   email: {
      type: String,
      required: [true,'PLease provide email']   ,
      unique: true     
   },
   password: { 
        type: String,
        required: [true,'PLease provide password']   
     },
     isVerified: {
        type: Boolean,
        default: false
     },
     isAdmin: {
        type: Boolean,
        default: false
     },
     forgotPasswordToken: String,
     forgotPasswordTokenExpiry: Date,
     verifyToKen: String,
     verifyTokenExpiry: Date

})   

const User =  mongoose.models.users || mongoose.model("users", userSchema)  //users is the name of collection in db with schema userSchema( fields of collection)

export default  User    

