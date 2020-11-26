const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Aleksey', url: 'https://i.ibb.co/sv6Gsq8/1.png'},
        {id: 2, name: 'Petr', url: 'https://i.ibb.co/Jd8jnh1/2.png'},
        {id: 3, name: 'Sasha', url: 'https://i.ibb.co/FVmqGCt/3.png'},
        {id: 4, name: 'Sveta', url: 'https://i.ibb.co/0X0PNvD/4.png'},
        {id: 5, name: 'Roman', url: 'https://i.ibb.co/jVzWjLv/5.png'}
    ] as Array<{id: number, name: string, url: string}>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you ?'},
        {id: 3, message: 'What are you doing here?'}
    ]as Array<{id: number, message: string}>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.message}],
            };
        }
        default:
            return state;
    }
}
type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE,
    message: string
}

export const sendMessageCreator = (message: string): SendMessageCreatorType => ({type: SEND_MESSAGE, message})

export default dialogsReducer;