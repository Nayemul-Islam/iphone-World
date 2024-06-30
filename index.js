const express = require("express");
const cors = require("cors");
const app = express();
// For Security
// require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://Nayem:123456N@cluster0.jqssshx.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // CRUD operation

    // database declare Phone and Team Both
    const phoneCollection = client.db("app-database").collection("phones");
    const teamCollection = client.db("app-database").collection("team");

    // API for creating a new Phone post.
    app.post("/add-a-phone", async (req, res) => {
      const phone = req.body;

      // Insert into DataBase
      const result = await phoneCollection.insertOne(phone);
      res.send(result);
    });

    //API for fetching all Phone

    app.get("/all-phones", async (req, res) => {
      const result = await phoneCollection.find().toArray();
      res.send(result);
    });
    //  API for fetching single Phone details

    app.get("/phone/:id", async (req, res) => {
      const id = req.params.id;
      // Find a Phone using the id passed as param
      const query = { _id: new ObjectId(id) };
      const result = await phoneCollection.findOne(query);

      res.send(result);
    });

    // API for updating a single Phone
    app.put("/update-by-id/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedPhone = req.body;

      const updates = { $set: updatedPhone };

      // Now call the updateOne method for updating the selected Phone
      const result = await phoneCollection.updateOne(filter, updates);

      res.send(result);
    });

    // API for deleting a single Phone
    app.delete("/delete-by-id/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      // Now call the deleteOne method for deleting the selected Phone

      const result = await phoneCollection.deleteOne(filter);
      res.send(result);
    });

    // post a single teammate
    app.post("/add-teammate", async (req, res) => {
      const teammate = req.body;
      const result = await teamCollection.insertOne(teammate);
      res.send(result);
    });
    // get all the teammates
    app.get("/all-teammates", async (req, res) => {
      const result = await teamCollection.find().toArray();
      res.send(result);
    });
    app.get("/team/:id", async (req, res) => {
      const id = req.params.id;
      // Find a Phone using the id passed as param
      const query = { _id: new ObjectId(id) };
      const result = await teamCollection.findOne(query);

      res.send(result);
    });
    // API for updating a single Phone
    app.put("/update-by-id-team/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedTeam = req.body;

      const updates = { $set: updatedTeam };

      // Now call the updateOne method for updating the selected Phone
      const result = await teamCollection.updateOne(filter, updates);

      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
