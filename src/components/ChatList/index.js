import React, { useState, useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { useParams, useRouteMatch } from "react-router-dom";

export default function ChatList () {
    const params = useParams();
    const match = useRouteMatch();
    const [chats, setChats] = useState([
        {
          id: 1,
          name: "Chat 1",
          messageList: ['id1'],
        },
        {
          id: 2,
          name: "Chat 2",
          messageList: [{ author: 'me', text: "message 2" }],
        },
        {
          id: 3,
          name: "Chat 3",
          messageList: [
            { author: 'me', text: "message 3" },
            { author: 'bot', text: "how you doin" },
          ],
        },
      ]);

    const selectedChat = useMemo(
        () => chats.find((chat) => chat.id === params.chatId),
        [params, chats]
      );
    
    const selectedChatIndex = useMemo(
        () => chats.findIndex((chat) => chat.id === params.chatId),
        [params, chats]
      );

    const [value, setValue] = React.useState(2);
    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  const handleSwitchChats = () => {
    setChats([...chats, chats.length+1 ]);
  }
    return (
        <>
            <Paper square>
                <Tabs
                    orientation="vertical"
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    {chats.map((chat, index) => (
                        <Link to={`/chats/${chat.id}`}>
                            <Tab
                            key={index}  
                            label={`Chat ${index+1}`}
                            />
                        </Link>
                    ))}

                </Tabs>
            </Paper>
            <div className='newchat'>
            <Button 
                className='newchat-button'
                variant="outlined"
                onClick={handleSwitchChats}
                >New Chat
                <AddIcon />
            </Button>
            </div>
            
        </>
    )
}