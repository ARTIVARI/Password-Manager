const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')


dotenv.config()


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'notehub';
const port = 3000
app.use(bodyparser.json())
app.use(cors())

client.connect();

// show all the password
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})


// enter/save all the password
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success: true, result: findResult})
})


// delete all the password
app.delete('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.deleteOne(password);
  res.send({success: true,  result: findResult})
})





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})