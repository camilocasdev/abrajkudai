import mongoose from "mongoose";
//import { MongoClient, ServerApiVersion } from 'mongodb'
//import cfig from './config.js'

export const dbconnect = async function connect() {
    mongoose.connect(process.env.DB_URI , {
        dbName: 'db'
}, {
    useFindAndModify: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
.then(db => console.log('Se conecto a la DB'))
.catch(error => {
    console.log(process.env.DB_URI)
    console.log(error)
})
}

/* 
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    }
});

export const runner = async function run() {
    console.log('Entro a conectar la base de datos')
    try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    } finally {
    // Ensures that the client will close when you finish/error
    console.log('cerro la base de datos')
    await client.close();
    }
}
 */