//kuch nahi bhay bas mongo url use kar  database se connection banege mongoose ka use karke // standard code hai ye 



import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URi!);
        const connection= mongoose.connection;

        connection.on('connected',()=>{
            console.log("MOngoDB connected");
        })
        connection.on('error',(err)=>{
            console.log("MOngoDB connection failed");
            console.log(err);
            process.exit();
        })



    }
    catch(e){
console.log('something went wrong in connecting to DB');
console.log(e);


    }





}