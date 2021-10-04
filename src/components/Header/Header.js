import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="header-container ">

            {/* header hero-section starts */}

            <div>
                <div className="row d-flex header-main align-items-center justify-content-center">


                    <div className="col-md-6 p-title">
                        {/* main heading starts */}

                        <h1 className="title">
                            Quick   Pronouncia <br />
                            <small> <h2>Learn And Practice</h2></small>

                        </h1>

                        {/* main heading ends  */}

                        {/* sub-heading strts  */}

                        <p className="text-white mt-3">
                            Every student matters, every moment counts. Our expert mentors <br />   teach different languages proficiently.
                        </p>

                        {/* sub-heading ends  */}


                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>

            {/* header hero-section ends  */}

        </div>
    );
};

export default Header;