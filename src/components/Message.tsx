import React from 'react';
import styled from 'styled-components';

type MessageProp = {
    message: string
}

const Message = (props: MessageProp) => {
    console.log("this the message...")
    console.log(props.message)
    let temp = JSON.parse(props.message)
    return(
        <div>{temp.body}</div>
    )
}

export default Message