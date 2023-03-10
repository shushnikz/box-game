import React, { useEffect, useState } from 'react'

export const Box = () => {

    const [text, setText] = useState(0);
    const setInterval_ID = setInterval(my_alert_func, 60000)

    function my_alert_func() {
        alert('Your Game Time is over 🥲🥲');
    }
    // Set timeout to call stop_interval function after 12 seconds
    setTimeout(stop_interval, 60000);
    function stop_interval() {
        clearInterval(setInterval_ID);
    }

    const handleClick = () => {
        setText(text + 1)
    }


    return (
        <div className='flexcontainer'>
            <div className='innerbox'></div>
            <div className='innerbox'></div>
            <div className='innerbox'></div>
            <div className='innerbox'></div>
            <div className='innerbox'>
                <button onClick={handleClick}><h1>HIT {text}</h1></button>
            </div>
            <div className='innerbox'></div>
            <div className='innerbox'></div>
            <div className='innerbox'></div>
            <div className='innerbox'></div>
        </div>
    )
}
