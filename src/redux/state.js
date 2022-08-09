const store = {
    _callSubscriber() {
        console.log('State was changed');
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 1},
                {id: 2, message: 'Hi, how are you?', likesCount: 1},
                {id: 3, message: 'Hi, how are you?', likesCount: 1},
                {id: 4, message: 'Hi, how are you?', likesCount: 1},
                {id: 5, message: 'Hi, how are you?', likesCount: 1},
                {id: 6, message: 'Hi, how are you?', likesCount: 1},
            ],
            dialogs: [
                {id: 1, name: 'Artem'},
                {id: 2, name: 'Arseny'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Ilya'},
                {id: 5, name: 'Dima'},
                {id: 6, name: 'Misha'},
            ],
            newPostText: 'lox',
        },
        messagesPage: {
            messages: [
                {id: 1, messages: 'Artembfdbfdf'},
                {id: 2, messages: 'Arsenyfbddbdfdb'},
                {id: 3, messages: 'Sashal;k;klp'},
                {id: 4, messages: 'Ilya;fkvflkvmlv'},
                {id: 5, messages: 'Dimaéc;l;kll'},
                {id: 6, messages: 'Mishasdl;llfkd'},
            ],
        },
    },

    getState() {
        debugger;
        return this._state;
    },

    addPost() {
        const newId = this._state.profilePage.posts.length + 1;
        const newPost = {
            id: newId,
            message: this._state.profilePage.newPostText,
            likesCount: newId,
        };
        this._state.profilePage.posts.push(newPost);
        this.updateNewPostText('');
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


}



export default store;


