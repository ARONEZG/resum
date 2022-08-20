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
    switch (action.type) {
        case ADD_POST: {
            const newId = state.posts.length + 1;
            const newPost = {
                id: newId,
                message: state.newPostText,
                likesCount: newId,
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_TEXT_AREA:
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;

    }
   

}



export default profilePageReducer;