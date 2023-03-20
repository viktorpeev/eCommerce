import React from "react";
import Male from './../../assets/male.png';
import Female from './../../assets/female.png';

const Directory = (props) => {
    return (
        <div className="Directory">
            <div className="wrap">
                <div className="item" style={{ backgroundImage: `url(${Male})` }}>
                    <a href="/">
                        Shop Dreams
                    </a>
                </div>
                <div className="item" style={{ backgroundImage: `url(${Female})` }}>
                    <a href="/">
                        Shop qualities
                        </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;