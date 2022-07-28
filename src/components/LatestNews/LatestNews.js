import React from 'react'
import NewsCard from './NewsCard'

const LatestNews = () => {
    return (
        <div>
            <div className="top-items">

                <h2 className='heading-title'>Latest News & Events</h2>
                <p>See More</p>
            </div>

            <div className='latest-section'>
                < NewsCard
                header='SECOND TERMINATION EXAMINATION NOTICE - 2074'
                description='Second Termination examination is going on at school level from 16th Poush. Second Termination examination for +2 and Bachelor level is going to started from 19th Poush.'
                date='2022-01-22'
                />
            </div>
        </div>
    )
}

export default LatestNews