let state = {
    profilePage: {
        posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hi, im fine, thank you.', likesCount: 15}
    ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Aleksey'},
            {id: 2, name: 'Petr'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Roman'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you ?'},
            {id: 3, message: 'What are you doing here?'}
        ]
    }
}

export default state;