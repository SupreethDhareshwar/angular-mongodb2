const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;

const config=require("./config.json");

app.set("port", process.env.PORT || 3001);

var url = config.db.client+'://'+config.db.connection.host+':'+config.db.connection.port+'/'+config.db.connection.database;
console.log(url);
MongoClient.connect(url, { 
  useNewUrlParser: true
 }, (err, database) => {
  if (err) {
    console.warn(`Failed to connect to the database. ${err.stack}`);
  }
  else{
    app.locals.db = database.db(config.db.connection.database);
    app.listen(app.get("port"), () => {
      console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
    });
  }
});


app.get('/api/scrollData', async (req, res,next)=> {
  try{
    const db = req.app.locals.db;
   
    const scrollData = await db.collection(config.db.connection.scrollCollection).find({}).toArray();
      if(scrollData){
        res.send(scrollData);
      }
      else{
        res.sendStatus(404);
      }
  }
  catch(err){
      next(err);
  }
});

app.get('/api/offerData', async (req, res,next)=> {
  try{
    const db = req.app.locals.db;
   
    const offerData = await db.collection(config.db.connection.offerCollection).find({}).toArray();
      if(offerData){
        res.send(offerData);
      }
      else{
        res.sendStatus(404);
      }
  }
  catch(err){
      next(err);
  }
});


