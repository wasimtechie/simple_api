import { app } from "./app.js";

import { connectDatabase } from './data/database.js'

connectDatabase();

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})