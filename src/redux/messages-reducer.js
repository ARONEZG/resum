const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGES = 'SEND_MESSAGES';
const CURRENT_ID = 'CURRENT_ID';

const messagesPageReducer = (state, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
          
        state.newTextMessage = action.newText;
        

    } else if (action.type === SEND_MESSAGES) {

        const newMessage = state.newTextMessage;
        const currentId = state.dialogId;

        state.messages[currentId - 1].messages = newMessage;

        state.newTextMessage = '';
     


    }

    return state;
}

export default messagesPageReducer;