import React from 'react';
import MessageField from 'components/MessageField';
import ChatList from 'components/ChatList';
import Layout from 'components/Layout';

export default function ChatPage () {
    
    return (
        <Layout>
            <div className='chat-list'>
                <ChatList />
            </div>
            <div className='chat-block'>
                <MessageField />
            </div>
        </Layout>
    )
};
