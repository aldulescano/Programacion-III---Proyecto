import React from 'react';
import './error.css'

function Error(){

    return (
        <section>
            <div className='paqueteError'>
                <h2>Error</h2>
                <img src='/img/error.png' alt='404'/>
            </div>
            <div>
                <p>¡Perdón! Esa página esta viendo una película</p>
            </div>
        </section>
    )
}

export default Error;