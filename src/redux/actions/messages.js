import { addChatMessage } from "./chats";

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const addMessage = (messageID, message) => {
    return {
        type: ADD_MESSAGE,
        messageID, 
        message
    }
}

export const deleteMessage = (messageID,message) => {
    return {
        type: DELETE_MESSAGE,
        messageID,
        message
    }
}

export const addMessageThunk = (selectedChatID, message) => (dispatch, getState) => {
    const newMessageID = Object.keys(getState().messagesStore).length + 1;

    if (message.author === 'Bot') {
        setTimeout(() => {
            dispatch(addMessage(newMessageID, message));
            dispatch(addChatMessage(selectedChatID, newMessageID));
        }, 2000);

    } else {
        dispatch(addMessage(newMessageID, message));
        dispatch(addChatMessage(selectedChatID, newMessageID));
    }
  };
  