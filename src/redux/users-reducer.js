const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
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
            return {...state, users: [...action.users]};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};



        default:
            return state;
    }


};

export const followAC = (userId) => ({type: FOLLOW, id: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, id: userId});
export const setUsersAC = (users) => {
    return {type: SET_USERS,  users: users};
};
export const setPageAC = (currentPage) => {
    return {type:SET_CURRENT_PAGE, currentPage: currentPage}
}
export const toggleIsFetchingAC = (isFetching) => {
    return {type:TOGGLE_IS_FETCHING, isFetching: isFetching}
}

export default usersReducer;