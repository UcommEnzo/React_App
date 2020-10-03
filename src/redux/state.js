import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Hi, im fine, thank you.', likesCount: 15}
            ],
            newPostText: 'tralala'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;