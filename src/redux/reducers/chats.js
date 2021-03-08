import {
    CHAT_ADD,
    CHAT_ADD_MESSAGE,
    CHAT_DELETE_MESSAGE
} from 'redux/actions/chats';

const initialState = {
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
};

export default function chatsReducer(state = initialState, action) {
    switch (action.type) {
        case CHAT_ADD: {
            const newChatID = Object.keys(state).length + 1;
            return {
                ...state,
                [newChatID]: {
                    name: `Chat ${newChatID}`,
                    messages: []
                }
            }
        };
        case CHAT_ADD_MESSAGE: {
            const newState = {...state};
            const {chatID, messageID} = action;

            newState[chatID].messages.push(messageID);

            return newState;
        }
        case CHAT_DELETE_MESSAGE: {
            const newState = {...state};
            const {chatID, messageID} = action;
            const indexToDelete = newState[chatID].messages.indexOf(messageID);

            newState[chatID].messages.splice(indexToDelete, 1);

            return newState;
        }
        default: {
            return state;
        }
    }
}