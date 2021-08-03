import React, { useState } from 'react';

const Coffee = ({name, description, origin, image}) => {

    return (
        <div className='coffee'>
            <div className="coffee__left">
                <img src="https://camposcoffee.com/wp-content/uploads/2018/11/500G_Front_SUPERIOR-300x300.png" alt="" />
                {console.log(image)}
            </div>
            <div className="coffee__right">
                <h1>{name}</h1>
                <h4>{origin}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Coffee
