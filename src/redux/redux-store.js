import {combineReducers, legacy_createStore as createStore} from "redux"; 
import messagesPageReducer from "./messages-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



const reducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer,
});


const store = createStore(reducer);

export default store;