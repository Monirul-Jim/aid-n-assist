import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5nuw1j2.mongodb.net/?retryWrites=true&w=majority`;


export async function GET() {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    try {
      await client.connect();
      const volunteersCollection = client.db('donationDB').collection('volunteers');
      
      const volunteerData = await volunteersCollection.find().toArray();
  
      return NextResponse.json(volunteerData)
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: ["Unable to fetch volunteer data."] }),
      };
    } finally {
      // client.close();
    }
  }
  