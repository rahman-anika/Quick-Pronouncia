import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import './Courses.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faSignInAlt

} from "@fortawesome/free-solid-svg-icons";
import MenuBar from '../MenuBar/MenuBar';



const Courses = () => {

    // state declaration starts 

    const [courses, setCourses] = useState([]);

    // state declaration ends 


    // fake data load starts from json file 

    useEffect(() => {
        fetch('/coursesData.json')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);

    // fake data load ends from json file 




    return (
        <div>
            {/* Menubar starts  */}
            <MenuBar></MenuBar>

            {/* Menubar ends  */}
            <br />

            {/* Services section starts */}

            <h1 style={{ color: 'goldenrod' }}>Our Services</h1>



            <div className="course-container">
                <div className="row">
                    {
                        courses?.map(course => <div className="col-md-4">
                            <div className="cart">
                                {/* course image starts */}
                                <div className="logo-image">
                                    <img className="logo-img" src={course.image} alt="" />
                                </div>
                                {/* course image endss */}

                                <br />

                                {/* course desciption starts */}

                                <h1>{course.name}</h1>
                                <h4>Price: ${course.price}</h4>
                                <h4>Type: {course.types}</h4>
                                <h4>Duration: {course.duration}</h4>
                                <h4>Language: {course.language}</h4>
                                {/* course desciption ends */}

                                <br />
                                {/* show all courses button starts */}
                                <button className="btn-courses">
                                    <FontAwesomeIcon icon={faSignInAlt} /> Enroll Now</button>
                                {/* show all courses button ends */}

                            </div>
                        </div>)
                    }
                </div>

            </div>

            {/* Services section ends  */}

            {/* Footer starts  */}

            <Footer></Footer>

            {/* Footer ends  */}

        </div>
    );
};

export default Courses;