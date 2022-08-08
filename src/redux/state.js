const state = {
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
        ]
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
}

export const addPost = (postMessage) => {
    debugger;
    const newId = state.profilePage.posts.length + 1;
    const newPost = {
        id: newId,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost); 
}

export default state;


