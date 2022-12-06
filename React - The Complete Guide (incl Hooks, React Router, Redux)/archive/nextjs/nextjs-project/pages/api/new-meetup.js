import {MongoClient} from 'mongodb'
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        const {title, image, address, description} = data

        const client = await MongoClient.connect('mongodb+srv://admin:PM9M0VTu7m7eNxGy@meetups.tnoxu2l.mongodb.net/test')
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        client.close()
        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler