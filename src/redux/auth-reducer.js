const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_DATA = 'SET_USER_DATA';



const initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,

};



const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
            };


        default:
            return state;
    }


};


export const setUserDataAC = (userId, login, email) => {
    return { type: SET_USER_DATA, data: {userId, login, email} };
};


export default authReducer;