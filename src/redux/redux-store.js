import {combineReducers, legacy_createStore as createStore} from "redux"; 
import messagesPageReducer from "./messages-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";



const reducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});


const store = createStore(reducer);

window.store = store;

export default store;