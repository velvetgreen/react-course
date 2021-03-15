import MessageField from 'components/MessageField';
import ChatList from 'components/ChatList';
import Layout from 'components/Layout';
import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function ChatPage () {
    const params = useParams();

    const [messagesStore, setMessagesStore] = useState({});
    const [chats, setChats] = useState({
        1: {
          name: "Chat 1",
          messages: []
        },
        2: {
          name: "Chat 2",
          messages: [],
        },
        3: {
          name: "Chat 3",
          messages: [],
        },
    });

    const selectedChat = chats[params.chatId];
    const selectedChatMessages = useMemo(() => {
        const messages = [];
        selectedChat.messages.forEach((messageID) => {
            messages.push(messagesStore[messageID]);
        });

        return messages;
    }, [selectedChat, messagesStore]);

    const onMessageDelete = (messageID) => () => {
        const selectedChatCopy = {...selectedChat};
        selectedChatCopy.messages.splice(messageID, 1);
        const chatsCopy = {...chats};
        chatsCopy[params.chatId].messages = selectedChatCopy.messages;
        setChats(chatsCopy);

        setMessagesStore({
            ...messagesStore,
            [messageID]: null
        });
    }

    const onMessageSend = (message) => {
        const id = Object.keys(messagesStore).length + 1;

        setMessagesStore({
            ...messagesStore,
            [id]: message
        });
    }

    useEffect(() => {
        const id = Object.keys(messagesStore).length + 1;

        const chatsCopy = {...chats};
        chatsCopy[params.chatId].messages = [
            ...chatsCopy[params.chatId].messages,
            id,
        ]
        setChats(chatsCopy);
    }, [messagesStore]);

    const onChatAdd = () => {
        setChats([...chats, {
            id: chats.length + 1,
            name: `Chat ${chats.length + 1}`,
            messages: [],
        }]);
    }

    return (
        <Layout>
            <div className='chat-list'>
                <ChatList
                    onChatAdd={onChatAdd}
                    chats={chats}
                    chatId={params.chatId}
                 />
            </div>
            <div className='chat-block'>
                <MessageField 
                    onMessageDelete={onMessageDelete}
                    onMessageSend={onMessageSend}
                    messages={selectedChatMessages}
                />
            </div>
        </Layout>
    )
};
