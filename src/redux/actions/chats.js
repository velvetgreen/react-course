export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_ADD_MESSAGE = 'CHAT_ADD_MESSAGE';
export const CHAT_DELETE_MESSAGE = 'CHAT_DELETE_MESSAGE';

export const addChat = () => ({
    type: CHAT_ADD,
});

export const addChatMessage = (chatID, messageID) => {
    return {
        type: CHAT_ADD_MESSAGE,
        chatID,
        messageID
    }
}

export const deleteChatMessage = (chatID, messageID) => {
    return {
        type: CHAT_DELETE_MESSAGE,
        chatID,
        messageID
    }
}