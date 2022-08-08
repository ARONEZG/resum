import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profle";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes } from "react-router-dom";


function App(props) {
    return (
        
            <div className="page">
                <Header/>
                <Profile
                    addPost={props.addPost}
                    posts={props.appState.profilePage.posts}
                    messages={props.appState.messagesPage.messages}
                    dialogs={props.appState.profilePage.dialogs}
                />
                <Footer/>
            </div>
            
            );
            }

export default App;
