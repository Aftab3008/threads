import moongoose from 'mongoose';
let isConnected=false;
export const connectToDB=async()=>{
    moongoose.set("strictQuery",true);
    if(!process.env.MONGODB_URL){
        return console.log("MongoDB URL is missing")
    }
    if(isConnected){
        return console.log("Already connected to DB");
    }
    try {
        await moongoose.connect(process.env.MONGODB_URL)
        isConnected=true;
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connecting to DB",error)
    }
}