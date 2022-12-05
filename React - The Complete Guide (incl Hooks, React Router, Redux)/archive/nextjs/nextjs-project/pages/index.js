import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

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
    return <MeetupList meetups={props.meetups}/>
}

export async function getStaticProps(props) {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}
export default HomePage