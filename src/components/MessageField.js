import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function MessageField () {

  const messagesState = useState([]);
  const [messages, setMessages]  = messagesState;
  const [userMessage, setUserMessage] = useState('');
  // const inputRef = useRef()

  const sendMessage = () => {
    if (userMessage !== '') {
      setMessages([...messages, {text: userMessage, author: 'you'} ]);
    }
  }

  const handleClick = () => {
    sendMessage()
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }
  const handleChange = (e) => {
    setUserMessage(e.target.value);
  }

  useEffect(() => {
    let botMessage;
    let messageToReply = userMessage.toLowerCase()
    // const userMessage = inputRef.current.value.toLowerCase();
    switch(true) {
      case messageToReply.includes('hi'):
        botMessage = 'Hello, leatherbag';
        break;
      case messageToReply.includes('how are you?'):
        botMessage = `I'm fine and you?`;
        break;
      case messageToReply.includes(`i'm ok`):
        botMessage = `That's amazing. Wanna end the conversation?`;
        break;
      case messageToReply.includes(`i'm sad`):
        botMessage = `Then don't be`;
        break;
      case messageToReply.includes('sure'):
        botMessage = `Good luck have fun, organism`;
        break;
      default: 
        botMessage = 'Sorry wat?';
    }
    setTimeout(() => {
      if (messages.length > 0 && messages[messages.length - 1].author === 'you'){
        setMessages([...messages, {text: botMessage, author: 'Bot'} ]);
      }
    }, 2000);
    
    setUserMessage('');
    // inputRef.current.value = '';
  }, [messages]);

  return (
    <>
    <div className='messages'>
        {messages.map((message, index) => (
          <Message 
            messagesState={messagesState}
            index={index}
            key={index} 
            text={message.text} 
            author={message.author} 
          />
        ))}

      </div>
      <div className="controls">
          <TextField
            autoComplete='off'
            style={{marginBottom: 15, marginTop: 5}}
            fullWidth
            id="standard-basic" 
            label="Type here"
            onKeyDown={handleKey}
            onChange={handleChange}
            value={userMessage}
          />

      </div>
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleClick}
      >
      Send Message
      </Button>
    </>
  )
}
