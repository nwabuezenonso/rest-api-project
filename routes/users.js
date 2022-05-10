// import express
import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

// import router from express  
const router = express.Router();

// router methods with controller 

router.get('/', getUsers);

router.post('/', createUser);

// route parameter occurs after column sign
router.get('/:id', getUser);

// delete method
router.delete('/:id', deleteUser);

// patch method to update
router.patch('/:id', updateUser);

// exporting routes
export default router;