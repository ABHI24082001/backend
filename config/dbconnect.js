import mongoose from "mongoose";
const dbConnect =  ()=>{
try {
<<<<<<< HEAD
    const connection =  mongoose.connect(
      "mongodb+srv://sonukr24082001:Abhi%40123@cluster0.hamldut.mongodb.net/NextStep"
=======
    const connection = mongoose.connect(
      "mongodb+srv://sonukr24082001:Abhi%40123@cluster0.hamldut.mongodb.net/Police"
>>>>>>> 00cbe4255ce62ac4e04592ae7870aff79ba25101
    );
   if(connection){
    console.log("DB connection established")
   }
    
} catch (error) {
    console.log(error)
}
}
export default dbConnect;