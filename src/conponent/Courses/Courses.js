import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Courses.css';
import CoursesItem from '../Courses-item/CoursesItem';

const Courses = () => {

    const first12 = fakeData.slice(0, 12);
    const [Courses, setCourses] = useState(first12);
    const [cart, setCart]= useState([]);
    
    const hendleAddCourses = (Courses) => {
        const newCart =[...cart, Courses];
        setCart(newCart);
    }

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const courses = cart[i];
        total = total + courses.price;
        
    }
     return (
        <div className="courses-area">
           
            <div className="courses-container">
                {
                    Courses.map(Courses => <CoursesItem Courses={Courses} hendleAddCourses={hendleAddCourses}></CoursesItem>)
                }
            </div>
            <div className="card-container">
                <h2>Order Summary</h2>
                <h5>Added Courses:{cart.length}</h5>
                <p> Total Price: ${total}</p>
            </div>
       </div>
    );
};

export default Courses;