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