// API is  a set of rules that allows programs to interact wtth other program
// Rest is a set of rules that developer use to create API
// CRUD is an acronyms for create, read, update, delete

// we can use import when we add a type: module in the package.json file
import express from "express";
// allow us to take in data from a form body
import bodyParser from "body-parser";

// import user routes 
import usersRoutes from "./routes/users.js";

// initialize application
const app = express();

// specifying the post
const PORT = 5000;

// initialize the body parser middleware
app.use(bodyParser.json());
// middleware for getting users in routes
app.use("/people", usersRoutes);

// routes
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

// listen to the server on the port
app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
