const express = require ("express");
const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const mongoURI = "mongodb://localhost:27017"
let dbchoice = "aparna1"
let collections ="data"
app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/form.html")
});
 app.post('/',(req,res)=>{
   let fn = req.body.fname;
   let ln = req.body.lname;
   create(mongoClient,mongoURI,dbchoice,collections,fn,ln)
      res.redirect('/');
});
async function create(mongoClient,mongoURI,dbchoice,collection,fname,lname){
  // const mongoclient = new mongoClient(mongoURI);
  mongoClient.connect(mongoURI).then(()=>{
    const result = db.collection(collection).insertMany({Firstname:fname,lastname:lname});
    console.log(result.insertIds[0]);
  })
};
app.listen(3000,()=>{
  console.log("Server Starrted");
});
