const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



const initialState = {
    users: []
};



const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {

                        return {...u, followed: true,};
                    }

                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {...u, followed: false,};
                    }
                    return u;
                }),
            };
        case SET_USERS:

            const newState = {...state, users: [...state.users, ...action.users]};
            return newState;

        default:
            return state;
    }


};

export const followAC = (userId) => ({type: FOLLOW, id: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, id: userId});
export const setUsersAC = (users) => {
    return {type: SET_USERS,  users: users};
};

export default usersReducer;