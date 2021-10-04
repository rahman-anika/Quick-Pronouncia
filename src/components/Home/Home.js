import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faEnvelopeSquare,
    faSignInAlt,
    faAngleDoubleRight,

} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';



const Home = () => {

    // state declaration starts

    const [courses, setCourses] = useState([]);
    const [mentors, setMentors] = useState([]);

    // state declaration ends

    // fake data load starts from json file 

    useEffect(() => {
        fetch('/coursesData.json')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);

    useEffect(() => {
        fetch('/mentorsData.json')
            .then(res => res.json())
            .then(data => setMentors(data));

    }, []);

    // fake data load ends from json file 

    return (
        <div>

            {/* Menubar starts  */}
            <MenuBar></MenuBar>
            {/* Menubar ends  */}

            {/* Header starts  */}
            <Header></Header>

            {/* Header ends  */}

            <br />
            <br />

            {/* 1st 3 mentors showing starts  */}

            <h1 style={{ color: 'rgb(12, 112, 12)' }}>Our Expert Mentors</h1>



            <div className="mentor-container">

                <div class="d-grid gap-2 d-md-flex justify-content-md-end">

                    <Link to="/mentors">
                        <button className="btn btn-success me-md-4" type="button">
                            Show All Mentors  <FontAwesomeIcon icon={faAngleDoubleRight} /></button>

                    </Link>


                </div>

                <div className="row">
                    {
                        mentors.slice(0, 3)?.map(mentor => <div className="col-md-4">
                            <div className="mentor-cart">
                                <div className="logo-image">
                                    <img className="mentor-img" src={mentor.image} alt="" />
                                </div>
                                <br />
                                <h1>{mentor.name}</h1>
                                <h4>Age: {mentor.age}</h4>
                                <h4>Country: {mentor.country}</h4>
                                <h5>Email: {mentor.email}</h5>
                                <h4>Cell: {mentor.phone}</h4>
                                <br />
                                <button className="btn btn-success">
                                    <FontAwesomeIcon icon={faEnvelopeSquare} /> Send Email</button>


                            </div>
                        </div>)
                    }
                </div>

            </div>
            {/* 1st 3 mentors showing ends  */}


            <br />

            {/* 1st 3 services showing starts  */}

            <h1 style={{ color: 'goldenrod' }}>Our Services</h1>

            <div className="course-container">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">

                    <Link to="/courses">
                        <button className="btn-courses me-md-4" type="button">
                            Show All Courses  <FontAwesomeIcon icon={faAngleDoubleRight} /></button>

                    </Link>


                </div>
                <div className="row">
                    {
                        courses.slice(0, 3)?.map(course => <div className="col-md-4">
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

            {/* 1st 3 services showing ends  */}


            {/* Footer starts  */}
            <Footer></Footer>

            {/* Footer ends  */}

        </div>
    );
};

export default Home;