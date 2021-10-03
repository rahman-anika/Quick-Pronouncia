import React from 'react';
import './Header.css';
import MenuBar from "../MenuBar/MenuBar";

const Header = () => {
    return (
        <div className="header-container ">
            <div className="">
                <div className="row d-flex header-main align-items-center justify-content-center">
                    <MenuBar></MenuBar>

                    <div className="col-md-6 p-title">
                        <h1 className="title">
                            Quick   Pronouncia <br /> <small> <h2>Learn And Practice</h2></small>

                        </h1>
                        <p className="text-white mt-3">
                            Every student matters, every moment counts. Our expert mentors <br />   teach different languages proficiently.
                        </p>

                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;