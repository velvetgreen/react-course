import {
    ADD_MESSAGE,
    DELETE_MESSAGE
} from 'redux/actions/messages';

const initialState = {};

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            // const newState = {...state};
            const {messageID,message} = action;
            // newState[messageID] = message;
            
            return {
                ...state,
                [messageID]: message
            };
        }
        case DELETE_MESSAGE: {
            const newState = {...state};
            const {messageID} = action;
            delete newState[messageID]

            return newState;
        }
        default: {
            return state;
        }
    }
}
