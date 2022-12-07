import {MongoClient} from 'mongodb'
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        const {title, image, address, description} = data

        const mongoUrl = process.env.MONGODB_URI;
        const client = await MongoClient.connect(mongoUrl)
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        client.close()
        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler