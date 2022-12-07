import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from 'mongodb'
import Head from 'next/head'

const mongoUrl = process.env.MONGODB_URI;

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1920px-Pyramids_of_the_Giza_Necropolis.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1920px-Pyramids_of_the_Giza_Necropolis.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a second meetup!'
    },

]

function HomePage(props) {
    return <>
        <Head>
            <title>React Meetups</title>
            <meta
                name="description"
                content="Browse a huge list of highly active React meetups!"
            />
        </Head>
        <MeetupList meetups={props.meetups}/>
    </>
}

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//
//     return {
//         props: {
//             DUMMY_MEETUPS
//         }
//     }
// }
export async function getStaticProps(props) {
    const client = await MongoClient.connect(mongoUrl)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage