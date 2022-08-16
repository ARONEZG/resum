const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 1 },
        { id: 2, message: 'Hi, how are you?', likesCount: 1 },
        { id: 3, message: 'Hi, how are you?', likesCount: 1 },
        { id: 4, message: 'Hi, how are you?', likesCount: 1 },
        { id: 5, message: 'Hi, how are you?', likesCount: 1 },
        { id: 6, message: 'Hi, how are you?', likesCount: 1 },
    ],

    newPostText: 'lox',
}

 const profilePageReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        const newId = state.posts.length + 1;
        const newPost = {
            id: newId,
            message: state.newPostText,
            likesCount: newId,
        };
        state.posts.push(newPost);
        state.newPostText = '';

    }
    else if (action.type === UPDATE_TEXT_AREA) {
        state.newPostText = action.newText;

    }
   
    return state;
}



export default profilePageReducer;