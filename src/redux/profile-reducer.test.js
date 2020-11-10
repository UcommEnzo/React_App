import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hi, im fine, thank you.', likesCount: 15}
    ],
}


it('post length should increase', () => {
    let action = addPostActionCreator("newPostText")
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})

it('after deletion, the length of the array should decrease', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
})