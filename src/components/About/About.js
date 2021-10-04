import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './About.css';

const About = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <div>
                <img src="https://www.winnerschapelhouston.org/wp-content/uploads/2018/07/ABOUT-US.jpg" className="about-img" alt="" />


            </div>
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

            <div className="about-container">

                <h1 className="about-heading">Our Partners</h1>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div>


                                <img src="https://i1.wp.com/cms.babbel.news/wp-content/uploads/2019/07/Babbel-Logo-Avatar.png?height=140&isDefault=true&s=140" className="partner-icon" alt="" />


                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>


                                <img className="partner-icon" src="https://cdn.iconscout.com/icon/free/png-256/duolingo-282167.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>


                                <img className="partner-icon" src="https://assets.materialup.com/uploads/9ba910e7-7b66-43d0-9241-2bc5efeddee5/preview" alt="" />
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