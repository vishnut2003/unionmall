
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vishnu:vgoFpluOMNuju075@unionmall.9tvfd0l.mongodb.net/?retryWrites=true&w=majority&appName=unionmall";
const dbname = 'unionmall';

const state = {
    db: null
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connect = async (done) => {
    try {
       await client.connect();
       state.db = await client.db(dbname);
    }catch(err) {
        done(err);
    }
    
    done()
}

const get = () => {
    return state.db;
}

module.exports = { connect, get }