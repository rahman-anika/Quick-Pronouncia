import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (

        // Not Found page starts 
        <div className="text-center text-danger">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for might have been removed or is temporary unavailable</p>
            <Link to="/home">
                <button className="btn btn-success">Back To Home</button>
            </Link>
        </div>
        // Not Found page ends

    );
};

export default NotFound;