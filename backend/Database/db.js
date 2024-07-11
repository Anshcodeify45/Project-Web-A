import mongoose from "mongoose";



export const Connection = async (USER,PASSWORD) => {
    const URL =`mongodb://${USER}:${PASSWORD}@ac-cugkack-shard-00-00.gt8ymh4.mongodb.net:27017,ac-cugkack-shard-00-01.gt8ymh4.mongodb.net:27017,ac-cugkack-shard-00-02.gt8ymh4.mongodb.net:27017/PROJECTA?ssl=true&replicaSet=atlas-kwb0le-shard-0&authSource=admin&retryWrites=true&w=majority&appName=projectA`;
    try {
          await mongoose.connect(URL);
          console.log('Database connected successfully')
    } catch(error){
        console.log('Error while connecting Database', error.message)
    }
}

export default Connection;