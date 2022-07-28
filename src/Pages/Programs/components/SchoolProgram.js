import React from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'

const SchoolProgram = () => {

    // let facilities = [
    //     {
    //         "title": "Science Lab:",
    //         "description": "PNA has an innovative and inventory science lab facilitating with the magnificent instruments of practical classes for science."
    //     },
    //     {
    //         "title": "Computer Lab:",
    //         "description": "PNA does have a well-equipped computer lab containing sufficient stocks of LCD computers with free internet service round the clock."
    //     },
    //     {
    //         "title": "Transportation:",
    //         "description": "PNA is located in a prime location in close proximity to ring road. Hence, it is in a walking distance. However, it has transportation system to ferry students on and off from different routes within the city at very affordable rate."
    //     },
    //     {
    //         "title": "Hostel/Day Boarders:",
    //         "description": "Under the strict supervision of the promoters, this facility has been provided for the students desirous from grade one to ten. This is totally free from the solitary and monotonous environment."
    //     },
    //     {
    //         "title": "Cafeteria:",
    //         "description": "PNA has multi-cuisine cafeteria where both faculties and students can have all sorts of balanced, nutritious and hygienic snacks, drinks, lunch, dinner and other varieties of refreshment at reasonable cost."
    //     },
    //     {
    //         "title": "Organizational Involvement:",
    //         "description": "The involvement in the society and community friendly programs outbursts both external and internal talent of an individual. The post student life is to be contributive and productive. Therefore, to make an individual prepared for the dignified life, we involve him/her in numerous organizations like: Junior Red cross Circle, Scout, and Eco Club and so on."
    //     },
    //     {
    //         "title": "Student Support Services:",
    //         "description": "PNA has developed multiple types of students support services so as to ignite their zeal and potentials like-Extra Support Programmes for needy students (special coaching classes for weak students); Extra Classes for stimulating better performing students, Career Counselling and Brain Storming and so on."
    //     },

    // ]

    let extraCurricularActivities = [
        {
            "title": "Cultural Programmes:",
            "description": "Dance and music classes are a must to broaden the horizon of the recreational faculty of the students. Hence, PNA imparts such classes to enhance and proliferate the will of learners in promoting our culture. PNA has recorded its pride in various local and national tournaments."
        },
        {
            "title": "Games & Sports:",
            "description": "To possess a sound mind, health is to be sound. Amulgation of both games and sports emulgate both and builds healthy and disciplined manpower. Therefore, we conduct different indoor and outdoor sports activities like volleyball, basketball, table tennis, chess etc on every Friday. Similarly, the ANNUAL SPORTS MEET/WEEK is organized with much fanfare where maximum numbers of students participates in festive mood in different events of their choice."
        },
       
    ]

    let schoolDetails = [
        {
            "title": "Instructional Methodology:",
            "description": "Students at PNA are taught by highly qualified and experienced faculties by using advanced and innovative pedagogy. The teaching–learning procedures are:",
            "points": [
                "Student centred innovative teaching methods.",
                "Classes based on the interaction among the students.",
                "Deficiency diagnostic in the students and instruction in a desirable environment.",
                "Participatory and inclusive pedagogy.",
                "Frequent workshops, seminars, field visit, tours and excursion.",
                "Informative and updated classes from the national and international scholars and experts.",
                "Homely and cordial learning environment.",
                "Acquaintance of acculturation and globalization."
            ]
        },
        {
            "title": "Eligibility for Enrollment:",
            "description": "The enrollment at PNA is strictly merit based to qualifying students. They must appear at the Entrance test and Interview. Failing to meet the criteria will be considered disqualified. The admission will be granted only during the commencement of the new academic session."
        },
        {
            "title": "Evaluation Procedure:",
            "description": "PNA stresses most on the quality in students. The way we evaluate depends on the way we instruct. We do keep an eye in their physical, mental, emotional and social outlook as the informal methods of evaluation. Formally, we conduct diagnostic, formative and summative tests and exams. Periodical assessment and practical are taken as per necessity of concerned subjects. Similarly, weekly tests, unit tests, term exams, and annual exam are conducted in an academic year.",
            "table": [
                {
                    "sNo": "S. No.",
                    "type": "Exam Type",
                    "percent": "Percentage",
                },
                {
                    "sNo": "1",
                    "type": "1st UT",
                    "percent": "20",
                },
                {
                    "sNo": "2",
                    "type": "1st Term",
                    "percent": "80",
                },
                {
                    "sNo": "3",
                    "type": "Mid Term",
                    "percent": "10",
                },
                {
                    "sNo": "4",
                    "type": "2nd UT",
                    "percent": "20",
                },
                {
                    "sNo": "5",
                    "type": "2nd Term",
                    "percent": "80",
                },
                {
                    "sNo": "6",
                    "type": "Annual Exam",
                    "percent": "60+(1stTerm+Mid Term+2nd Term=40)=100",
                },
            ]
        },
    ]

    let schoolHeading = [
        {
            "title": "Pre- Primary to Grade X - (An entire Familial Environment for the kids):",
            "description": [
                "Precious National Academy Secondary School, promoted by a team of professionals and academicians, aims to provide quality education by developing friendly, caring and happy school environment for students. PNA is aware of the importance of ethical values and moral characters of the students that are essentials for their future life.",
                "Today's kids are the future of nation and we are here now to prepare them for being the change agents. We all know that the habits cannot be changed overnight. Therefore PNA believes that children should be taught about the ethical aspects from the very beginning of their life. We are strongly determined to accomplish this objective with a great zeal."
            ],
            "points": [
                {
                    "heading": "What we are doing?",
                    "point": [
                        "Providing totally family environment in teaching learning methods.",
                        "Following interactive learning process by giving every student an opportunity to participate in the learning process.",
                        "We firmly believe that no real learning takes place unless the learners desire to learn. so that the school is committed to teach the students with experience of fun, joy and self learning.",
                        "Ensuring that each child achieves his/her potential in every area of growth and development."
                    ]
                },
                {
                    "heading": "We aim at working with our children to enable them to:",
                    "point": [
                        "Promote self-esteem, self confidence and independent.",
                        "Prepare students for their exposure to the wider world to develop social, moral and academic qualities.",
                        "Encourage students to set their own high standards and make the possible progress in the areas of curriculum.",
                        "Develop lively, flexible and inquisitive mind."
                    ]
                },
            ]

        },
    ]



    return (
        <div className='container'>
            <h2 className='heading-two'>School</h2>
            {
                schoolHeading.map((heading) => <div className="services">
                    <h4>
                        {heading["title"]}
                    </h4>
                    <br />
                    {heading["description"].map((desc) => <p> {desc} </p>)}
                    {heading["points"].map((point) =>
                        <div className="heading-point">
                            <br /><br />
                            <h6>{point["heading"]}</h6>
                            <br />
                            <br />
                            {point["point"].map((child) =>
                                <div className="points">
                                    <div className="icon">
                                        <VscDebugBreakpointLog size={12} />
                                    </div>
                                    <p>{child}</p>
                                </div>)}
                        </div>)}
                </div>)
            }
            {schoolDetails.map((e) =>
                <div className="services">
                    <h4>
                        {e["title"]}
                    </h4>
                    <br />
                    <p> {e["description"]} </p>
                    {e["table"] != null ? <div>
                        <table>
                            {e["table"].map((instance) =>
                                <tr>
                                    {e["table"][0] == instance ?
                                        <div className='school-table'> 
                                            <th >
                                                {instance["sNo"]}
                                            </th>
                                            <th >
                                                {instance["type"]}
                                            </th>
                                            <th >
                                                {instance["percent"]}
                                            </th>
                                        </div>
                                        :
                                        <div className='school-table'>
                                            <td >
                                                {instance["sNo"]}
                                            </td>
                                            <td >
                                                {instance["type"]}
                                            </td>
                                            <td >
                                                {instance["percent"]}
                                            </td>
                                        </div>

                                    }
                                </tr>)}
                        </table>
                    </div> : null}
                    <br />
                    <br />
                    {e["points"] != null ?
                        e["points"].map((child) =>
                            <div className="points">
                                <div className="icon">
                                    <VscDebugBreakpointLog size={12} />
                                </div>
                                <p>{child}</p>
                            </div>
                        ) : null}
                </div>
            )}
            <div className="padding-top ">
                <h2 className='heading-two'>CO/EXTRA - CURRICULAR ACTIVITIES</h2>
            </div>
            {extraCurricularActivities.map((e) =>
                <div className="services">
                    <h4>
                        {e["title"]}
                    </h4>
                    <br />
                    <p> {e["description"]} </p>
                </div>
            )}
        </div>
    )
}

export default SchoolProgram