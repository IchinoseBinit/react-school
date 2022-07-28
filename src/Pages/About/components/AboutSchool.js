import React from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'


const AboutSchool = () => {

    let collegeAboutList = [
        'Precious National College (Precious National Academy Higher Secondary School) was founded two and half decades back in 1985 AD in Balaju, Kathmandu, in close proximity to ring road. PNC since its inception, has been relentlessly striving to create an excellent educational abode to explore, enhance and excel the latent potentials of an individual to its fullest. Hence, PNC has emerged as a premier academy in the capital for higher education.',
        'To materialize its pivotal dictum, “An institution for academic excellence & moral values” PNC has harboured a unique blend of professional expertise and dedication: the exceptionally qualified & experienced faculties and a dynamic management team of highly acclaimed individuals from various sectors of society. Committed to cater for quality education and character building, PNC aspires to equip its products with high degree of proficiency and aptitude in order to cope up with emerging challenges of the 21st century.',
        'PNC is affiliated to Higher Secondary Education Board (HSEB). It offers various subjects in three different streams: Management, Humanities and Education in +2 level. And, Tu affiliated BBS and BA programmes are also running covering a variety of subjects. Moreover, PNC has its junior wing: Precious National Academy (from Nursery to standard Ten).'
    ]

    let missionAndFeatures = [
        [
            "Mission",
            [
                "Our mission is to develop PNC into a widely recognized academia in future. PNC aims at imparting precious education to its students and instil them in moral values so as to produce visionary, skilled and era demanded human resources.",
                "To develop PNC a complete destination for education excellence.",
                "To develop and pursue complete academic programmes that are market friendly, accessible and innovative.",
                "To foster learning as a lifelong process there by excelling academically.",
                "To develop strong network with other reputed colleges and universities at home and abroad focusing on skill efficiency, modern technology and global networking."
            ],
        ],
        [
            "Objectives",
            [
                "PNC is a student-centred learning community where students are refined into valuable human resource for all management levels and sectors. The major objectives of PNC include:",
                "Leading the nation in producing qualitative, skilled and potential human resource.",
                "Instilling the students in the culture of self-respect, self-reliance and positive attitude.",
                "To equip the students with energy and competence for charming opportunity career.",
                "Producing the ambassadors of civilized culture and values, regardless of their caste, creed, colour and culture.Leading the nation in producing qualitative, skilled and potential human resource.",
                "Instilling the students in the culture of self-respect, self-reliance and positive attitude.",
                "To equip the students with energy and competence for charming opportunity career.",
                "Producing the ambassadors of civilized culture and values, regardless of their caste, creed, colour and culture.",
                "To keep its graduates become ethical, employable and capable of addressing the needs of fiercely competitive global market of this era.",
                "To keep its graduates become ethical, employable and capable of addressing the needs of fiercely competitive global market of this era."
            ]
        ]
    ]

    let sailentFeatures = [
        "PNC has maintained an excellent academic ambience. It offers a myriad of opportunities and facilities: and above all, the harmonious teamwork to share knowledge and experience which help students groom their charismatic future careers. Some of its premier features are:",
        "Accessible, peaceful and academic locale.",
        "Qualified, experienced and professional teaching faculties.",
        "Student centred teaching pedagogy.",
        "Hassle free transportation from each nook and corner of the city.",
        "Spacious and well ventilated classrooms.",
        "Well equipped Hotel Management and Computer labs.",
        "Regular co/extracurricular activities.",
        "Affordable fee structure.",
        "Myriad of scholarship and stipend to the needy and deserving students.",
        "Hygienic cafeteria in the college premises.",
        "Extra tutorial classes to the needy students.",
        "Regular assignment and project works.",

    ]

    return (

        <div>
            <div className="container heading-top">
                <h1>PRECIOUS NATIONAL ACADEMY SCHOOL/COLLEGE</h1>
                {collegeAboutList.map((e) => <div> <br /><br /> <p>{e}</p> </div>)}
                {missionAndFeatures.map((e) =>
                    <div className="padding-top padding-bottom">
                        <h4>
                            {e[0]}
                        </h4>
                        <br />
                        <p> {e[1][0]} </p>
                        <br />
                        <br />
                        {e[1].map((child) =>
                            child === e[1][0] ? null :
                                <div className="points">
                                    <div className="icon">
                                    <VscDebugBreakpointLog size={16} />
                                    </div>
                                    <p>{child}</p>
                                </div>
                        )}
                    </div>
                )}
            </div>
            <div className="features">
                <div className="container padding-top padding-bottom">
                    <h4>Sailent Features</h4>
                    <br />
                    <p> {sailentFeatures[0]} </p>
                    <br />
                    <br />
                    {sailentFeatures.map((child) =>
                        child === sailentFeatures[0] ? null :
                            <div className="points">

                                <div className="icon">
                                    <VscDebugBreakpointLog size={16} />
                                </div>
                                <p>{child}</p>
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AboutSchool