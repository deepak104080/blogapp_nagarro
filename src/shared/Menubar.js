import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
    return(
        <>
        <div className="row bg-warning bg-opacity-50">
                <div className="col-12">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                </div>
            </div>
        </>
    )
}


export default Menubar;