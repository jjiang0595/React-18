import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return <MeetupDetail
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1920px-Pyramids_of_the_Giza_Necropolis.jpg'
        title="A First Meetup"
        address="Some Street 5, Some City"
        description="The meetup description"
    />
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [{
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1920px-Pyramids_of_the_Giza_Necropolis.jpg',
                id: 'm1',
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'This is a first meetup'
            }
        }
    }
}

export default MeetupDetails