const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Aleksey', url: 'https://i.ibb.co/sv6Gsq8/1.png'},
        {id: 2, name: 'Petr', url: 'https://i.ibb.co/Jd8jnh1/2.png'},
        {id: 3, name: 'Sasha', url: 'https://i.ibb.co/FVmqGCt/3.png'},
        {id: 4, name: 'Sveta', url: 'https://i.ibb.co/0X0PNvD/4.png'},
        {id: 5, name: 'Roman', url: 'https://i.ibb.co/jVzWjLv/5.png'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you ?'},
        {id: 3, message: 'What are you doing here?'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
                newMessageBody: '',
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;