import MessageField from 'components/MessageField';
import ChatList from 'components/ChatList';
import Layout from 'components/Layout';
import React, { useMemo } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, useStore } from 'react-redux';
import { addChat, addChatMessage, deleteChatMessage } from 'redux/actions/chats';
import { addMessage, deleteMessage } from 'redux/actions/messages';


export default function ChatPage () {
    const params = useParams();
    const dispatch = useDispatch();
    const store = useStore();
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
        const selectedChatCopy = {...selectedChat};
        selectedChatCopy.messages.splice(messageID, 1);
        const chatsCopy = {...chats};
        chatsCopy[selectedChatID].messages = selectedChatCopy.messages;
        
        dispatch(deleteMessage(messageID,message));
        dispatch(deleteChatMessage(selectedChatID, messageID));
        console.log(messagesStore)
    }

    const onMessageSend = (message) => {
        const id = Object.keys(messagesStore).length + 1;

        dispatch(addMessage(id, message));
        dispatch(addChatMessage(selectedChatID, id));
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
