const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");

const app = express();

dotenv.config({path:'config.env'});

app.use(morgan('tiny'));

// set view engine
app.set("view engine", "ejs");

// load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


// load routers
app.get("/", (req,res) =>{
    res.render("index");
});

let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}
app.listen(port,()=>{
    console.log(`Server startted on port: ${port}`);
});