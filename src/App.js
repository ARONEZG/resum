import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profle";
import Footer from "./components/Footer/Footer";



function App(props) {
    return (<div className="page">
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default App;
