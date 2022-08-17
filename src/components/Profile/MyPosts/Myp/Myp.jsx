import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/state";

const Myp = (props) => <div> My posts
        <div>
            <textarea
                ref={props.referenceByTextArea}
                value={props.textValue}
                onChange={props.updateNewPostText}
            />
            <button onClick={props.addPost}>Add post</button>
        </div>
    </div>;

export default Myp;