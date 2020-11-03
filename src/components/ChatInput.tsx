import React from 'react';
import styled from 'styled-components';

type ChatInputProps = {
    send: (value: KeyboardEvent) => void
}

const ChatInput = (props: ChatInputProps) => {
    
    return(
        <div className="ChatInput">
            <input onKeyDown={(value: any) => props.send(value)} />
        </div>
    )
}

export default ChatInput