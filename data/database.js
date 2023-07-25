import mongoose from 'mongoose'

export const connectDatabase = () =>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:'userBackend'
})
.then(()=> console.log('DB Connected'))
.catch((err) => console.error(err))
}