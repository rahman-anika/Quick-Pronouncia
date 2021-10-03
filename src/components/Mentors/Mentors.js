import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Mentors.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {


} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelopeSquare

} from "@fortawesome/free-solid-svg-icons";


const Mentors = () => {

    const [mentors, setMentors] = useState([]);


    useEffect(() => {
        fetch('/mentorsData.json')
            .then(res => res.json())
            .then(data => setMentors(data));

    }, []);


    return (
        <div>
            <Header></Header>
            <br />

            <h1 style={{ color: 'rgb(12, 112, 12)' }}>Meet With Our Mentors</h1>



            <div className="mentor-container">
                <div className="row">
                    {
                        mentors?.map(mentor => <div className="col-md-4">
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
            <Footer></Footer>
        </div>
    );
};

export default Mentors;