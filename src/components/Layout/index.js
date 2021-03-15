import React from 'react'; 
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import InstallPopup from 'components/InstallPopup'

export default function Layout ({children}) {
    return (
        <>
            <Header />
            <Navigation />
            <div className='main'>
                {children}
            </div>
            <InstallPopup />
        </>
    )
}
