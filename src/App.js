import React, {useEffect, useState} from 'react';
import './App.css';

function App() {


  const [text,setText]=useState('')

  const gettext=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data) => {
      let randomnum = Math.floor(Math.random() * data.length)
      setText(data[randomnum])
    })
  }

  useEffect(()=>{
    gettext();
  },[])

  return (
    <div className="App">
      <div>
        <h1>Title</h1>
        <p>{text.title}</p>
        <h2>Content</h2>
        <p>{text.body}</p>
      </div>
      <button onClick={gettext}>Get Text</button>
    </div>
  );
}

export default App;
