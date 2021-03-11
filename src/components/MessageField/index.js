import React, { useState, useEffect } from 'react';
import Message from 'components/Message';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function MessageField ({
  onMessageDelete,
  onMessageSend,
  messages,
}) {
  const [userMessage, setUserMessage] = useState('');

  const sendMessage = () => {
    if (userMessage !== '') {
      onMessageSend({text: userMessage, author: 'you'});
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
    if (messages.length > 0 && messages[messages.length - 1].author === 'you') {
      onMessageSend({text: botMessage, author: 'Bot'});
    }
    setUserMessage('');
  }, [messages.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    <div className='messages'>
        {messages.map((message, index) => {
          return message && (
            <Message 
              onDelete={onMessageDelete(index)}
              key={index} 
              text={message.text} 
              author={message.author} 
              id={message.id}
            />
          )
        })}

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
