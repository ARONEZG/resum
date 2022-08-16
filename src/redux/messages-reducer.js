const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGES = 'SEND_MESSAGES';
const CURRENT_ID = 'CURRENT_ID';

const initialState = {
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
}

const messagesPageReducer = (state = initialState, action) => {

    switch (action.type) {
    
        case UPDATE_NEW_MESSAGE_TEXT:  
        state.newTextMessage = action.newText;
        return state;
        

        case SEND_MESSAGES:
        const newMessage = state.newTextMessage;
        const currentId = state.dialogId;
        state.messages[currentId - 1].messages = newMessage;
        state.newTextMessage = '';
        return state;


        case CURRENT_ID:
        state.dialogId = action.id;
        return state;

        default:
            return state;
}
}
export default messagesPageReducer;