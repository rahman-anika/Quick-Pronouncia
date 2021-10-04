import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import './Mentors.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {


} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelopeSquare

} from "@fortawesome/free-solid-svg-icons";
import MenuBar from '../MenuBar/MenuBar';


const Mentors = () => {

    // state declaration starts 
    const [mentors, setMentors] = useState([]);

    // state declaration ends

    // fake data load starts from json file 

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
            <br />

            {/* Mentor section starts */}

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

            {/* Mentor section ends */}

            {/* Footer starts  */}
            <Footer></Footer>
            {/* Footer ends  */}

        </div>
    );
};

export default Mentors;