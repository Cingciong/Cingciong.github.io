//modules
const express = require("express")
const app = express()

//veriables
const port = 3000;

const path = require("path")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{
    console.log( req.url );
    res.render("index.ejs")
})

app.listen(port, (err)=>{
    if(err){
        console.log("error", err)
        return;
    }
    console.log("listening on port ", port)
})


