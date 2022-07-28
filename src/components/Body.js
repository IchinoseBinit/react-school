import React from 'react'
import { VscLocation, VscBook } from 'react-icons/vsc';
import { BsFillBarChartFill } from 'react-icons/bs';

import IntroSection from './IntroSection/IntroSection'
import LatestNews from './LatestNews/LatestNews'
import WhyUs from './WhyUs/WhyUs'

const Body = () => {
    return (
        <div>
            <div className="image">
                <img src="http://www.preciouscollege.edu.np/assets/images/slide/slide-01.jpg" alt="Image" />
            </div>
            <div className="container">

                <IntroSection
                    header="Making difference positively"
                    description={[
                        'Precious National College (Precious National Academy Higher Secondary School) was founded two and half decades back in 1985 AD in Balaju, Kathmandu, in close proximity to ring road. PNC since its inception, has been relentlessly striving to create an excellent educational abode to explore, enhance and excel the latent potentials of an individual to its fullest. Hence, PNC has emerged as a premier academy in the capital for higher education.',
                        'To materialise its pivotal dictum, “An institution for academic excellence & moral values” PNC has harboured a unique blend of professional expertise and dedication: the exceptionally qualified & experienced faculties and a dynamic management team of highly acclaimed individuals from various sectors of society. Committed to cater for quality education and character building, PNC aspires to equip its products with high degree of proficiency and aptitude in order to cope up with emerging challenges of the 21st century.',
                        'PNC is affiliated to Higher Secondary Education Board (HSEB). It offers various subjects in three different streams: Management, Humanities and Education in +2 level. And, Tu affiliated BBS and BA programmes are also running covering a variety of subjects. Moreover, PNC has its junior wing: Precious National Academy (from Nursery to standard Ten).'
                    ]}
                    image="http://www.preciouscollege.edu.np/assets/images/precious-logo.png"
                />
            </div>
            <div className="why-us-container">
                <div className="container">
                    <h2 className='heading-title'>Why Precious?</h2>
                    <br /><br />
                    <div className="why-us-card">
                    {/* <div className=""> */}
                        <WhyUs
                            icon={<VscLocation size={50} color="#e8604c"/>}
                            header="Preiously Located"
                            description="We are located in the best place"
                        />
                        <WhyUs
                            icon={<VscBook size={50} color="#e8604c"/>}
                            header="STANDARD CURRICULUM"
                            description="We focus student centred teaching pedagogy and regular co/extracurricular activities."
                        />
                        <WhyUs
                            icon={<BsFillBarChartFill size={50} color="#e8604c"/>}
                            header="QUALITY EDUCATION"
                            description="We offer extra tutorial classes to the needy students and focus on regular assignment and project works."
                        />
                    </div>
                </div>
            </div>
            <div className='container padding-top'>
                <LatestNews />

            </div>

        </div>
    )
}

export default Body