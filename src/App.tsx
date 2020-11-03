import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'
import { connect, sendMsg } from "./api";

function App(){
  
  // const [chatHistory, setChatHistory] = useState([])
  const [chatHistory, setChatHistory] = useState<any[]>([])

  useEffect(() => {
    connect((msg: any) => {
      console.log("New Message")
      console.log(msg)
      
      setChatHistory((prevState: any) => {
        return([...prevState, msg])
      })
      
    });
  })
  function send(event: any) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory history={chatHistory} />
      <ChatInput send={send} />
    </div>
    );
}

export default App;
