const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';

 const profilePageReducer = (state, action) => {
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