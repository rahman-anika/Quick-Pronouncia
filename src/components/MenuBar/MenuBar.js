import React from 'react';
import './MenuBar.css';
import { Link } from "react-router-dom";
import logo from '../../images/QPronouncia-removebg-preview.png';


const MenuBar = () => {
    return (
        <div className="MenuBar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                            <img className="logo1" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">





                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/courses" className="items">
                                    <li>Services</li>
                                </Link>
                                <Link to="/mentors" className="items">
                                    <li>Mentors</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About us</li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;