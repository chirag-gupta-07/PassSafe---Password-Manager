const express = require('express');
require('node:dns/promises').setServers(["1.1.1.1", "8.8.8.8"]);
require('dotenv').config()
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');


const url = process.env.MONGODB_URI
const client = new MongoClient(url);
const run = async() =>{
  await client.connect()
  console.log("Connected Successfully")
}

run()


const dbname = process.env.DB_NAME
const app = express();
const port = 3000;

//Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
  const db = client.db(dbname);
  const a = await db.collection("passwords").find({}).toArray()
  res.json(a);
});

app.post('/', async (req, res) => {
  const db = client.db(dbname);
  const password = req.body
  const collection = db.collection("passwords")
  const findResult = await collection.insertOne(password)
  res.send({success:true,findResult})
});

app.delete('/', async (req, res) => {
  const db = client.db(dbname);
  const {_id} = req.body
  console.log(_id)
  const collection = db.collection("passwords")
  const findResult = await collection.deleteOne({_id: new ObjectId(_id)})
  res.send({success:true,findResult})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});