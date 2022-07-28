import React from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'


const ServicesFacilities = () => {

    let services = [
        {
            "title": "Library",
            "description": "PNC has a resourceful library which provides a high level of support to the teaching and learning programme. It has abundant number of text books, reference books, journals, research reports, newspapers, magazines and periodicals, which launch sufficient reading material to them.",
            "points": null,
        },
        {
            "title": "Hotel Management Lab",
            "description": "PNC has the well equipped HM lab, where students prepare a variety of cuisines and have numerous other experimental classes. Practical classes are conducted under the strict supervision and guidance of the respective lecturers.",
            "points": null,
        },
        {
            "title": "Computer Lab",
            "description": "PNC does possess a well resourced computer lab with all the artefact of a state-to-state-the–art technology having E-mail & Internet round the clock. The students will have the opportunities to enhance their potentials there with the latest technologies.",
            "points": null,
        },
        {
            "title": "Extra/Curricular Activities ",
            "description": "Extra/Co-curricular activities are the integral parts of quality education. Assimilating this fact, PNC conducts the following activities and tournaments for the holistic development of the students:",
            "points": [
                "Various Contests: debate, quiz contest, elocution, poem recitation, essay writing etc.",
                "Different Tournaments: volleyball, basket ball, football, cricket, table tennis, badminton, chess and so on.",
                "Recreational Programmes: dance, songs, cultural programmes, fashion show, talent show and many more."
            ],
        },
        {
            "title": "Cafeteria",
            "description": "Students and faculty members both are ensured quality and hygienic food and snacks at the cafeteria in the college premises. It offers a variety of fresh breakfast, snacks, lunch, soft drinks and other expected refreshments at reasonable cost. It serves well balanced, nutritious and hygienic foodstuffs for duo vegetarians and non- vegetarians.",
            "points": null,
        },
        {
            "title": "Transportation",
            "description": "PNC provides the transportation facility to the desirous students at an affordable rate from any nook and corner of the Kathmandu valley.",
            "points": null,
        },
        {
            "title": "Student Support Services",
            "description": "PNC has developed multiple types of students support services so as to ignite their zeal and potentials like-Extra Support Programmes for needy students (special coaching classes for weak students); Extra Classes for stimulating better performing students, Career Counselling and Brain Storming and so on.",
            "points": null,
        },

    ]

    return (
        <div className='container heading-top'>
            <h2>Services and Facilities</h2>
            {services.map((e) =>
                <div className="services">
                    <h4>
                        {e["title"]}
                    </h4>
                    <br />
                    <p> {e["description"]} </p>
                    <br />
                    <br />
                    {e["points"] != null ?
                        e["points"].map((child) =>
                            <div className="points">
                                <div className="icon">
                                    <VscDebugBreakpointLog size={16} />
                                </div>
                                <p>{child}</p>
                            </div>
                        ) : null}
                </div>
            )}
        </div>
    )
}

export default ServicesFacilities