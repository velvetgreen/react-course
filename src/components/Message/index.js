import React from 'react';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Message ({
  text,
  author,
  onDelete,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleDelete = () => {
  //   messages.splice(index, 1);
  //   setMessages([...messages]);
  // }
  const handleEdit = () => {
    //to do 
  }
  return (
      <>
        <div> 
          <Fab
            onContextMenu={handleClick}
            variant="extended" 
            style={{height:'auto', marginBottom:15}}>
            <strong className='author'> {author}:  </strong>
            <div className='message'>{text}</div>
          </Fab>
          <Menu 
            open={open}
            anchorEl={anchorEl}
            keepMounted
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleEdit}
            >Edit</MenuItem>
            <MenuItem 
              onClick={onDelete}
            >Delete</MenuItem>
          </Menu>
        </div>
      </>
  );
}
