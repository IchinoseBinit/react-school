import React from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'

const BBAProgram = () => {

    let details = [
        {
            "title": "Eligibility & Enrolment Procedure!",
            "description": "The enrolment at PNC is strictly merit based to qualifying students. The candidates need to fill up the application form made available from the college and complete the following procedure. Failing to meet the criteria will be considered disqualified.",
            "points": [
                "The students securing at least ‘C’ in the SLC or equivalent will be eligible to apply.",
                "They must pass the Entrance test and Interview."
            ],
        },
        {
            "title": "Teaching Methodology",
            "description": "Teaching methodology at PNC is innovative and student-centred. The PNC faculties are highly professional and experienced who are equipped with sufficient teaching tools and techniques. The instruction pedagogies are).",
            "points": [
                "Student oriented and curriculum - based instruction.",
                "Application of various innovative methods viz - lecturing, demonstration, inquiry and discovery.",
                "Seminars, workshops, symposium, field trips, excursions.",
                "Regular assignments, project works, research programmes, dissertation skills.",
                "Audio - visual aids.",
                "Instant feedback and corrective measures.",
                "Formative, progressive and summative assessment to guarantee the academic excellence."
            ],
        },
        {
            "title": "Precious College Scholarship Scheme",
            "description": "PNC has a myriad of scholarships and stipends ranging from partial to full scholarship particularly to the needy and the worthy students who apply and vie for winning. The detail of the merit based scholarship scheme is as follows:",
            "points": [
                "One student is not eligible to entertain more than one scheme.",
                "Scholarship schemes are subject to change and cancel any time if the students fail to strictly maintain the rules and regulations of the college.",
                "The continuity of the scholarship granted to the students of grade XI is subject to the maintenance of same percentage as of SLC in Board Examination conducted by HSEB.",
            ],
        },
    ]







    return (
        <div className='container heading-top'>
            <h2>BBA Program</h2>
            {details.map((e) =>
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
                                        <div>
                                            <th width="7%">
                                                {instance["sNo"]}
                                            </th>
                                            <th width="20%">
                                                {instance["type"]}
                                            </th>
                                            <th width="7%">
                                                {instance["number"]}
                                            </th>
                                            <th width="30%">
                                                {instance["criteria"]}
                                            </th>
                                            <th width="30%">
                                                {instance["scheme"]}
                                            </th>
                                            <th width="6%">
                                                {instance["humanities"]}
                                            </th>
                                        </div>
                                        :
                                        <div>
                                            <td width="7%">
                                                {instance["sNo"]}
                                            </td>
                                            <td width="20%">
                                                {instance["type"]}
                                            </td>
                                            <td width="7%">
                                                {instance["number"]}
                                            </td>
                                            <td width="30%">
                                                {instance["criteria"]}
                                            </td>
                                            <td width="30%">
                                                {instance["scheme"]}
                                            </td>
                                            <td width="6%">
                                                {instance["humanities"]}
                                            </td>
                                        </div>

                                    }
                                </tr>)}
                        </table>
                        <p>Note:</p>
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
            )}</div>
    )
}

export default BBAProgram