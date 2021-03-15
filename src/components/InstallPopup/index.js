import {React, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';

export default function InstallPopup () {
    const [shown, setShown] = useState(false)

    const handleShow = () => {
        setShown(true)
    }
    const handleClick = () => {
        setShown(false)
    }
    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone/.test( userAgent );
    };
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    if (isIos() && !isInStandaloneMode()) {
        handleShow();
    }


    return (
        <div 
        className='pop-up-wrapper'
        style={ { display: shown ? 'flex' : 'none' } }
        >
            <div className='pop-up'>
            <div>Plz install</div>
            <CloseIcon
            onClick={handleClick}
            />
            </div>
            
        </div>
    )
}
