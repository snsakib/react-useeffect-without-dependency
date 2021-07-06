import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('I run everytime the component re-renders');
  });

  const onNameChangeHandler = event => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onNameChangeHandler} />
      <h1>Name: {name}</h1>
    </div>
  );
}
