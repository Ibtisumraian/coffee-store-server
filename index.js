const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eqhhjdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
      // await client.connect();
      
      const coffeesCollections = client.db('coffeeDB').collection('coffee')
      const usersCollections = client.db('coffeeDB').collection('users')
      
    
      app.post('/users', async (req, res)=>{
        const user = req.body
        const result = await usersCollections.insertOne(user)
        res.send(result)
      })
    
      app.get('/users', async (req, res)=>{
        const result = await usersCollections.find().toArray()
        res.send(result)
      })
      
      app.get('/coffees', async (req, res) => {
          const result = await coffeesCollections.find().toArray()
          res.send(result)
      })
      app.post('/coffees', async (req, res) => {
          const newCoffee = req.body
          const result = await coffeesCollections.insertOne(newCoffee)
          res.send(result)
      })
    
      app.get('/coffees/:id', async (req, res) => {
          const id = req.params.id
          const query = { _id: new ObjectId(id) }
          const result = await coffeesCollections.findOne(query)
          res.send(result)
      })
      app.put('/coffees/:id', async (req, res) => {
        const id = req.params.id
        const filter = { _id: new ObjectId(id) }
        const updatedCoffee = req.body
        const options = { upsert: true }
        const updatedDoc = {
          $set: updatedCoffee
        }
        const result = await coffeesCollections.updateOne(filter, updatedDoc, options)
        res.send(result)
      
      
      })
    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await coffeesCollections.deleteOne(query)
      res.send(result)
    })
    

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    
    res.send("This is my response")
})

app.listen(port, () => {
    console.log('I should be listening on port', port);
    
})