import {MongoClient, ObjectId} from 'mongodb'
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";


const MeetupDetails = (props) => {
    return <>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta
                name="description"
                content={props.meetupData.description}
            />
        </Head>
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    </>
}

export async function getStaticPaths() {
    const mongoUrl = process.env.REACT_APP_BASE_URL;
    const client = await MongoClient.connect(mongoUrl)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}).project({_id: 1}).toArray()

    await client.close()

    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId

    const client = await MongoClient.connect('mongodb+srv://admin:PM9M0VTu7m7eNxGy@meetups.tnoxu2l.mongodb.net/test')
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId)
    })

    await client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails