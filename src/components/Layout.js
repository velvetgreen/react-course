import React from 'react'; 
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';

export default function Layout () {
    return (
    <>
        <Header />
        <div className='main'>
            <div className='chat-list'>
                <ChatList />
            </div>
            <div className='chat-block'>
                <MessageField />
            </div>
        </div>
    </>
    )
}
