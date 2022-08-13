const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGES = 'SEND_MESSAGES';
const CURRENT_ID = 'CURRENT_ID';

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 1 },
                { id: 2, message: 'Hi, how are you?', likesCount: 1 },
                { id: 3, message: 'Hi, how are you?', likesCount: 1 },
                { id: 4, message: 'Hi, how are you?', likesCount: 1 },
                { id: 5, message: 'Hi, how are you?', likesCount: 1 },
                { id: 6, message: 'Hi, how are you?', likesCount: 1 },
            ],

            newPostText: 'lox',
        },
        messagesPage: {
            messages: [
                { id: 1, messages: 'Artembfdbfdf' },
                { id: 2, messages: 'Arsenyfbddbdfdb' },
                { id: 3, messages: 'Sashal;k;klp' },
                { id: 4, messages: 'Ilya;fkvflkvmlv' },
                { id: 5, messages: 'Dimaéc;l;kll' },
                { id: 6, messages: 'Mishasdl;llfkd'},
            ],
            dialogs: [
                { id: 1, name: 'Artem' },
                { id: 2, name: 'Arseny' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Ilya' },
                { id: 5, name: 'Dima' },
                { id: 6, name: 'Misha' },
            ],
            newTextMessage: 'message',
            dialogId: '',
        },
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newId = this._state.profilePage.posts.length + 1;
            const newPost = {
                id: newId,
                message: this._state.profilePage.newPostText,
                likesCount: newId,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state); // функция субскрайбер рисует дом
        }
        else if (action.type === UPDATE_TEXT_AREA) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
          
            this._state.messagesPage.newTextMessage = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGES) {

            const newMessage = this._state.messagesPage.newTextMessage;
            const currentId = this._state.messagesPage.dialogId;

            this._state.messagesPage.messages[currentId - 1].messages = newMessage;

            this._state.messagesPage.newTextMessage = '';
            this._callSubscriber(this._state);


        } else if (action.type = CURRENT_ID) {
            this._state.messagesPage.dialogId = action.id;
            console.log(this._state.messagesPage.dialogId);
        }
    },


    subscribe(observer) {
        this._callSubscriber = observer; // функция для рендеринга, с помощью observer мы передаем ее из индекса в state
    },


}

export const addPostActionCreator = () => ({
    type: ADD_POST
})


export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_TEXT_AREA,
    newText: text,
})


export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})

export const addNewMessageActionCreator = (id) => ({
    type: SEND_MESSAGES,
    id: id,
})
export const currentIdActionCreator = (id) => ({
    type: CURRENT_ID,
    id: id,
})


export default store;


