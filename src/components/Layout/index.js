import React from 'react'; 
import Header from 'components/Header';
import Navigation from 'components/Navigation'

export default function Layout ({children}) {
    return (
        <>
            <Header />
            <Navigation />
            <div className='main'>
                {children}
            </div>
        </>
    )
}
