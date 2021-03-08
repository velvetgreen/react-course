import React, { useState, useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { useParams, Link } from "react-router-dom";

export default function ChatList ({
    selectedChatID,
    chats,
    onChatAdd,
}) {
    const params = useParams();

    const [value, setValue] = React.useState(2);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


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
                    {Object.keys(chats).map((chatId, index) => (
                        <Link to={`/chats/${chatId}`} key={index} className='chat-link'>
                            <Tab
                                style={{ color: selectedChatID === params.chatId ? "black" : "grey" }}
                                key={index}  
                                label={`Chat ${index+1}`}
                                chats={chats}
                            />
                        </Link>
                    ))}

                </Tabs>
            </Paper>
            <div className='newchat'>
            <Button 
                className='newchat-button'
                variant="outlined"
                onClick={onChatAdd}
                >New Chat
                <AddIcon />
            </Button>
            </div>
            
        </>
    )
}