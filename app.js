import express from 'express'
import dotenv from 'dotenv' 
import path from 'path'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import { config } from 'dotenv'

export const app = express();

config({
    path:'./data/config.env'
})

app.use(express.json()) // to get access of req.body or url encoder

app.use(userRouter )
 





