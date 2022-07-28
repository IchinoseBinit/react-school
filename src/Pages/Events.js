import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import moment from 'moment'

const Events = () => {

    const [listOfEvents, setlistOfEvents] = useState([])

    const getData = async () => {
        const data = await axios.get("http://127.0.0.1:8000/news-event/event/");
        setlistOfEvents(data.data);
    }

    useEffect(() => {
      getData();
    }, [])
    


  return (
    <section class="latest_blog_area p_120">
        	<div class="container">
        		<div class="main_title">
        			<h2>Latest Posts From Blog</h2>
                </div>
                <br /><br />
                {listOfEvents.map((element) =>  

                <div class="row latest_blog_inner" key={element["id"]}>
                    <div class="col-lg-3 col-md-6">
                        <div class="l_blog_item">
                            <img class="img-fluid" src={element["image"]} alt="" />
                            <a class="date" href="#">{moment(element["created_at"]).format('DD/MM/YYYY HH:mm')}</a>
                            <a href="single-blog.html"><h4>{element["title"]}</h4></a>
                            <p>{element["description"]}</p>
                        </div>
                    </div>
                </div>
                )}
        	</div>
        </section>
  )
}

export default Events