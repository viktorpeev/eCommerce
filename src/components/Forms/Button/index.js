import React from "react";

const Button =({children, ...otherProps})=>{
    return (
        <button className='btn' {...otherProps}>
            {children}
        </button>
    );
};

export default Button;