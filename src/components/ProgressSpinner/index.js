import React, { useRef } from 'react';

function ProgressSpinner(props) {
    const {progress} = props
    const spinnerRef = useRef(null);
    const completeRef = useRef(null);
    if(progress)
    {
        // console.log(spinnerRef)
        // spinnerRef.current.childNodes[0].className = "visually-hidden"
    }
    return(
        <>
            { progress ? 
            <p> 로딩완료</p>
            : 
            <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
            </div> }
        </>
    )
}

export default ProgressSpinner