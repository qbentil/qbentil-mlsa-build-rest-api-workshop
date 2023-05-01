import mongoose from 'mongoose';

const DBCONNECT = async (callback: () => void) => {
    try{
        await mongoose.connect(process.env.MONGO_URI || "")
        console.log("DB connection successful")
        callback()
    }catch(error:any){
        console.log("DB connection falied")
        throw new Error(error)
    }
}

export default DBCONNECT;