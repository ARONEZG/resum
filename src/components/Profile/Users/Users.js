import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";


const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.main}>
        <div>
            {pages.map(p => <span onClick={() => {
                props.onPageChanged(p);
            }}
                                  className={(props.currentPage === p && s.selectedPage) || s.page}>{p}</span>)}

        </div>

        {
            props.users.map(u => {
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
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    console.log(u.id);
                                    props.follow(u.id)
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
    </div>
}

export default Users;

