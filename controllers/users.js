// import uuid for id
import { v4 as uuid } from 'uuid';

// create array
let users = [];

// get user function
export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

// create user function
export const createUser = (req, res) => {   
    const user = req.body;

    // push some data and spread it to add more data to the array
    users.push({...user, id: uuid()});
    
    console.log(`User [${user.firstname}] added to the database.`);
};

// getUserid function
export const getUser = (req, res) => {
    res.send(req.params.id)
};

//  delete user function
export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    // filter the user that equals to the ID we have
    users = users.filter((user) => user.id !== req.params.id);
};

// function to update method
export const updateUser =  (req,res) => {
    // find the user by id
    const user = users.find((user) => user.id === req.params.id);
    
    user.firstname = req.body.firstname;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.firstname}.age has been updated to ${req.body.age}`)
};