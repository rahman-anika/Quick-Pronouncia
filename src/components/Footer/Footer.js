import React from 'react';
import './Footer.css';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,

} from "@fortawesome/free-brands-svg-icons";
import {

    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
    return (
        <div>

            {/* footer container starts  */}
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Quick Pronouncia</h1>
                                <h3>A Language Learning Center</h3>

                                {/* footer icon starts  */}

                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>

                                {/* footer icon ends  */}

                                <p className="mt-4 ">
                                    <small>
                                        *These statements have not been evaluated by the Food and
                                        Drug Administration. These products are not intended to
                                        diagnose.
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>Qpronouncia © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>

                        {/* footer menu starts  */}

                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">Mentors</li>
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu"> About us</li>
                                </ul>
                            </div>
                        </div>

                        {/* footer menu ends  */}

                        <div className="col-md-5">

                            {/* right footer menu starts  */}

                            <div className="right-footer-container">
                                <h3>Sign up for the newsletter</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />

                                <br />
                                <br />
                                <h1>Contact Info</h1>

                                <div className="phone d-flex align-items-center justify-content-center mt-4">

                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>+1 8 800 555 35 35</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>
                                            160 Broadway, New York, NY 10038,
                                            <br /> 102 1st Avenue, New York, NY 100
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* right footer menu ends  */}

                        </div>
                    </div>
                </div>
            </div>

            {/* footer container ends  */}

        </div>
    );
};

export default Footer;