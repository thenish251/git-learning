const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const app = express();
 
//Middlewares
app.use(express.json());
app.use("/books",router); //localhost:500/books

mongoose.connect("mongodb+srv://admin:vxqbGEKYfbTXikLI@cluster0.w86jqfm.mongodb.net/BookStore?retryWrites=true&w=majority"
).then(()=>console.log("connected to Database")).then(()=> {
    app.listen(5000);
}).catch((err)=>console.log(err));

// vxqbGEKYfbTXikLI