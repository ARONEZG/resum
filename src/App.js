import React from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";




function App(props) {
    return (<div className="page">
            <HeaderContainer/>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default App;
