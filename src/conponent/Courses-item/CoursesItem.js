import React from 'react';
import './CoursesItem.css'

const CoursesItem = (props) => {
    const {name, price, img} =props.Courses;
    
    return (
        <div className='CoursesItem-container'>
            <div className='img-container'>
                <img src={img} alt=""/>
            </div>
            <div className="name-container">
                <h4>{name}</h4>
                <br/>
                <p>$:{price}</p>
                <p><smal>By </smal></p>
                <button onClick={() => props.hendleAddCourses(props.Courses)} className="buy-btn">Buy Courses</button>
            </div>
        </div>
    );
};

export default CoursesItem;