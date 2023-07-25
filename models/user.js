import mongoose from 'mongoose'

const backendSchema = new mongoose.Schema({
    name: String,
    email: String
})

export const User = mongoose.model('users', backendSchema)

