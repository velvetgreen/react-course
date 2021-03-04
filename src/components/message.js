import React, { useState } from 'react';
export default function Message () {

   const [message, setMessage] = useState('Сейчас будет приемлемо');

   function showMessage () {
     setMessage('Стало приемлемо');
   }

   return (
    <>
      <button 
        type='button' 
        className='message-button'
        onClick={showMessage}
      >Get Message</button>
      <p>{message}</p>
    </>
   )
 }
