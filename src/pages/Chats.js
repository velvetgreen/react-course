import React, { useMemo } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChatMessage, disableChatBlink } from 'redux/actions/chats';
import { deleteMessage,addMessageThunk } from 'redux/actions/messages';
import MessageField from 'components/MessageField';
import ChatList from 'components/ChatList';
import Layout from 'components/Layout';


export default function ChatPage () {
    const params = useParams();
    const dispatch = useDispatch();
    const chats = useSelector(state => state.chats);
    const messagesStore = useSelector(state => state.messagesStore);


    const selectedChatID = params.chatId ? params.chatId : 1;
    const selectedChat = chats[selectedChatID];
    const selectedChatMessages = useMemo(() => {
        const messages = [];
        if (selectedChat) {
            selectedChat.messages.forEach((messageID) => {
                messages.push(messagesStore[messageID]);
            });
        }
        return messages;
    }, [selectedChat, messagesStore]);

    const onMessageDelete = (messageID,message) => () => {
        // const selectedChatCopy = {...selectedChat};
        // selectedChatCopy.messages.splice(messageID, 1);
        // const chatsCopy = {...chats};
        // chatsCopy[selectedChatID].messages = selectedChatCopy.messages;
        
        dispatch(deleteMessage(messageID,message));
        dispatch(deleteChatMessage(selectedChatID, messageID));
    }

    const onMessageSend = (message) => {
        dispatch(addMessageThunk(selectedChatID, message));
        setTimeout(() => {
            dispatch(disableChatBlink(selectedChatID))
            console.log('YARR')
        }, 15000);
    }


    const onChatAdd = () => {
        dispatch(addChat());
    }
    return (
        <Layout>
            <div className='chat-list'>
                <ChatList
                    onChatAdd={onChatAdd}
                    chats={chats}
                    selectedChatID={params.chatId}
                    selectedChat={selectedChat}
                 />
            </div>
            <div className='chat-block'>
                {selectedChat
                    ? (
                        <MessageField 
                            onMessageDelete={onMessageDelete}
                            onMessageSend={onMessageSend}
                            messages={selectedChatMessages}
                        />
                    ) : (
                        <div>Oops! Please select a new chat</div>
                    )
                }
            </div>
        </Layout>
    )
};
