import React, { useState,useEffect } from 'react';

export default function Message ({text,author}) {
  return (
      <>
        <div> 
          <strong> {author}</strong>
          <p>{text}</p>
        </div>
      </>
  );
}
