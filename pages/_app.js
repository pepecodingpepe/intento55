// /pages/_app.js
import '@/styles/globals.css';

if (typeof window === 'undefined') {
  try {
    require('destroy');
  } catch (error) {
    console.error("Error importing 'destroy' module:", error.message);
  }

  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://dopaminavisual:dQCh3ANGjtvcnnQ5@dopaminavisual.jpzt9v4.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      await client.close();
    }
  }

  run().catch(console.dir);
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
