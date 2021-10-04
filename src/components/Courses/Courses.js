import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import './Courses.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faSignInAlt

} from "@fortawesome/free-solid-svg-icons";
import MenuBar from '../MenuBar/MenuBar';



const Courses = () => {

    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('/coursesData.json')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);






    return (
        <div>
            <MenuBar></MenuBar>
            <br />

            <h1 style={{ color: 'goldenrod' }}>Our Services</h1>



            <div className="course-container">
                <div className="row">
                    {
                        courses?.map(course => <div className="col-md-4">
                            <div className="cart">
                                <div className="logo-image">
                                    <img className="logo-img" src={course.image} alt="" />
                                </div>
                                <br />
                                <h1>{course.name}</h1>
                                <h4>Price: ${course.price}</h4>
                                <h4>Type: {course.types}</h4>
                                <h4>Duration: {course.duration}</h4>
                                <h4>Language: {course.language}</h4>
                                <br />
                                <button className="btn-courses">
                                    <FontAwesomeIcon icon={faSignInAlt} /> Enroll Now</button>


                            </div>
                        </div>)
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Courses;