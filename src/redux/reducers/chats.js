import {
    CHAT_ADD,
    CHAT_ADD_MESSAGE,
    CHAT_DELETE_MESSAGE,
    CHAT_DISABLE_BLINK,

} from 'redux/actions/chats';

const initialState = {
    1: {
        name: "Chat 1",
        messages: [],
        newMessage: false,
    },
    2: {
        name: "Chat 2",
        messages: [],
        newMessage: false,

    },
    3: {
        name: "Chat 3",
        messages: [],
        newMessage: false,

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
            const {chatID, messageID} = action;
            
            return {
                ...state,
                [chatID]: {
                    ...state[chatID],
                    messages: [
                        ...state[chatID].messages,
                        messageID
                    ],
                    newMessage: true,
                }
            };
        }
        case CHAT_DISABLE_BLINK: {
            const {chatID} = action;

            return {
                ...state,
                [chatID]: {
                    ...state[chatID],
                    newMessage: false,
                }
            };
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