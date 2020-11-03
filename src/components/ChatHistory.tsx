import React from 'react';
import styled from 'styled-components';
import Message from './Message';

type ChatHistoryProp = {
    history: any[]
}

const ChatHistory = (props: ChatHistoryProp) => {
    console.log("this the props...")
    console.log(props)
    const messages = props.history.map((msg: any, index: any) => {
        return(<Message key={index} message={msg.data} />)
    });
  
    return (
        <div className="ChatHistory">
            <h2>Chat History</h2>
            {messages}
        </div>
    );
}

export default ChatHistory