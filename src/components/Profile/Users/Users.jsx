import React from "react";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../../assets/images/user.png'


class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                debugger;
                this.props.setUsers(response.data.items);
            });


    }



    render() {
        return <div className={s.main}>
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            {
                this.props.users.map(u => {
                    return <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    console.log(u.id);
                                    this.props.follow(u.id)
                                }}>Follow</button>
                        }
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>
                            u.location.city
                        </div>
                        <div>
                            u.location.country
                        </div>
                    </span>
                </span>
                    </div>
                })
            }
        </div>;
    }

}

export default Users;





