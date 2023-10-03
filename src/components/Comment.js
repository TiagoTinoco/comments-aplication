import React from "react";
import { formatRelative } from 'date-fns'

import './Comment.css';
import imageUser from './user.png';

const Comment = props => {
    return <div className="Comment">
        <img class="userImg" src={imageUser} alt={props.name} />
        <div class="content">
            <h2 class="name">{ props.name }</h2>
            <p class="email">{ props.email }</p>
            <p class="message">{ props.children }</p>
            <p class="date">{ formatRelative(props.date, new Date()) }</p>
        </div>
        <button onClick={props.onRemove}>&times;</button>
    </div>
};

export default Comment;