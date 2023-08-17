
import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5nuw1j2.mongodb.net/?retryWrites=true&w=majority`;


export async function POST(req) {
  const volunteerData = await req.json();

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const volunteersCollection = client.db('donationDB').collection('volunteers')

    await volunteersCollection.insertOne(volunteerData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: ["Message sent successfully"],
        success: true,
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: ["Unable to send message."] }),
    };
  } finally {
    // client.close();
  }
}

