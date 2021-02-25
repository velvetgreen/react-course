import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function ChatList () {
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
                    <Tab label="Chat 1" />
                    <Tab label="Chat 2" />
                    <Tab label="Chat 3" />
                </Tabs>
            </Paper>
        </>
    )
}