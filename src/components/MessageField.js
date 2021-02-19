import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';

export default function MessageField () {

  const [messages, setMessages] = useState([]);
  const inputRef = useRef()

  const sendMessage = () => {
    setMessages([...messages, {text: inputRef.current.value, author: 'you'} ]);
  }

  const handleClick = () => {
    sendMessage()
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  useEffect(() => {
    let botMessage;
    const userMessage = inputRef.current.value.toLowerCase();
    console.log(userMessage)
    switch(true) {
      case userMessage.includes('hi'):
        botMessage = 'Hello, leatherbag';
        break;
      case userMessage.includes('how are you?'):
        botMessage = `I'm fine and you?`;
        break;
      case userMessage.includes(`i'm ok`):
        botMessage = `That's amazing. Wanna end the conversation?`;
        break;
      case userMessage.includes(`i'm sad`):
        botMessage = `Then don't be`;
        break;
      case userMessage.includes('sure'):
        botMessage = `Good luck have fun, organism`;
        break;
      default: 
        botMessage = 'Sorry wat?';
    }

    if (messages.length > 0 && messages[messages.length - 1].author === 'you'){
      setMessages([...messages, {text: botMessage, author: 'Bot'} ]);
    }

    inputRef.current.value = '';
  }, [messages]);

  return (
    <>
    <div className='messages'>
        {messages.map((message, index) => (
          <Message 
            key={index} 
            text={message.text} 
            author={message.author} 
          />
        ))}

      </div>
      <div className="controls">
        <input 
          type='text' 
          className='input' 
          onKeyDown={handleKey}
          ref={inputRef} 
        />
        <button 
          type='button' 
          className='message-button'
          onClick={handleClick}
        > Send Message</button>
      </div>
      
    </>
  )
}
