
import 'server-only'
import DbConnect from './DbConnect';

export const getVolunteersFromDb = async () => {
    const db = await DbConnect();
    const volunteersCollection = db.collection('volunteers');
    return volunteersCollection.find({}).toArray();
};


