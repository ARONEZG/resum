import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profle";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div class="page">
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default App;
