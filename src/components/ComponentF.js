import React,{useContext} from 'react';
import {UserContext} from "./UserContext";
import {ChannelContext} from "./ChannelContext";

function ComponentF() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            Component F
            <p>User Name: {user.name}</p>
            <p>User Age: {user.age}</p>
            <p>User Company: {user.company}</p>
            <p>User Channel: {channel.name}</p>
            <a href={channel.link}>{channel.name}</a>
        </div>
    )
}

export default ComponentF;