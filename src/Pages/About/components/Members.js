import React from 'react'

const Members = () => {

    let bod = [
        {
            "image": "http://www.preciouscollege.edu.np/assets/images/susil-pant.jpg",
            "name": "Susil Pant",
            "title": "Chairman",
        },
        {
            "image": "http://www.preciouscollege.edu.np/assets/images/baburam-rijal.jpg",
            "name": "Baburam Rijal",
            "title": "Managing Director",
        },
        {
            "image": "http://www.preciouscollege.edu.np/assets/images/gopi-raj-parajuli.jpg",
            "name": "Gopi Raj Parajuli",
            "title": "Member Secretary / Principal",
        },
        {
            "image": "http://www.preciouscollege.edu.np/assets/images/bishnu-prasad-chudali.jpg",
            "name": "Bishnu Prasad Chudali",
            "title": "Financial Director",
        },
        {
            "image": "http://www.preciouscollege.edu.np/assets/images/bijaya-ranabhat.jpg",
            "name": "Bijaya Ranabhat",
            "title": "Director",
        },
        {
            "image": "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
            "name": "Mrs. Bhumika Sharma Bhattarai",
            "title": "Director",
        },
        {
            "image": "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
            "name": "Mr. Mahendra Prasad Adhikar",
            "title": "Director",
        },
        {
            "image": "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
            "name": "Mr. Laxman Marasini",
            "title": "Director",
        },
    ]

    let advisoryBoard = [
        {
            "name": "Assot. Prof. Dr. Narayan Prasad Gautam",
            "affiliation": "Tribhuvan University",
        },
        {
            "name": "Assot. Prof. Dr. Krishna Ghimire",
            "affiliation": "Tribhuvan University",
        },
        {
            "name": "Dr. Krishna Chandra Sharma",
            "affiliation": "Tribhuvan University",
        },
        {
            "name": "Mr. Ashok Kumar Aryal",
            "affiliation": "Former Joint Secretary, Ministry of Education",
        },
        {
            "name": "Mr. Khushi Ram Gurung",
            "affiliation": "Social worker",
        },
    ]

    return (
        <div className='container'>
            <div className="bod">
                <h2>Board of Directors</h2>
                <div className="card-bod">
                    {
                        bod.map((member) => <div class="card">
                            <img src={member["image"]} alt="" />
                            {/* <img src={member["image"]} alt="Avatar" style="width:100%" /> */}
                            {/* <div class="container"> */}
                            <h4>{member["name"]}</h4>
                            <p>{member["title"]}</p>
                            {/* </div> */}
                        </div>)
                    }
                </div>
            </div>
            <div className="advisory-board">
                <h2>
                    Advisory Board
                </h2>
                <div className="board-card">
                    {advisoryBoard.map((element) => <div className="card">
                        <h3>{element["name"]}</h3>
                        <h6>{element["affiliation"]}</h6>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Members