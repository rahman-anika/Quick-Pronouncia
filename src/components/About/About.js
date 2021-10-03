import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="about-container">
                <h1 className="about-heading">Why Choose Us?</h1>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="left-container text-start">
                                <h2 className="about-heading">Get Support</h2>


                                <p className="mt-4 ">
                                    <small>
                                        All students get support 24/7 in our learning center. They get lifetime access after enrolling a course.
                                    </small>
                                </p>


                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="left-container text-start">
                                <h2 className="about-heading">20+ Courses</h2>
                                <p className="mt-4 ">
                                    <small>
                                        Currently we are offering 20+ courses on learning different languages. Soon, we'll launch 10 more premium courses.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="left-container text-start">
                                <h2 className="about-heading">Best Mentors</h2>
                                <p className="mt-4 ">
                                    <small>
                                        Our mentors are very expert,skilled and helpful. They try to teach and help students 24/7.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="left-container text-start">
                                <h2 className="about-heading">Discount</h2>
                                <p className="mt-4 ">
                                    <small>
                                        Currently we are offering 10% discount on those students who enroll more than 2 courses. So, Hurry up!
                                    </small>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;