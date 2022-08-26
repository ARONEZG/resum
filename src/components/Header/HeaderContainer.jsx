import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserDataAC } from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me')
            .then((response) => {
                this.props.setUser();
            })

    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = () => {
    return {

    };
}


export default connect(mapStateToProps, {
    setUser: setUserDataAC,
})(HeaderContainer);
