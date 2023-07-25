import express from 'express'
import { User  } from '../models/user.js';
import { addNewUsers, getAllUsers } from '../controllers/user.js';

const router = express.Router();

router.use(express.json())


router.get('/', (req, res) =>{
    res.send('hello world')
})

router.get('/users/all', getAllUsers)

router.post('/users/new', addNewUsers)

export default router;