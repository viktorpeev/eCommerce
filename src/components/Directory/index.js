import React from "react";
import Male from './../../assets/mens-baal.jpg';
import Female from './../../assets/femoid-baal.jpg';
import './styles.scss'

const Directory = (props) => {
    return (
        <div className="Directory">
            <div className="wrap">
                <div className="item" style={{ backgroundImage: `url(${Male})` }}>
                    <a href="/">
                        Shop Men
                    </a>
                </div>
                <div className="item" style={{ backgroundImage: `url(${Female})` }}>
                    <a href="/">
                        Shop Women
                        </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;