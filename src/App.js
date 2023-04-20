import { useState, useEffect } from 'react';
import './App.css';
import { Divider, Input, Alert, TextField} from '@mui/material';

function App() {
  const [text, setText] = useState('');

  const [wordCount, setWordCount] = useState(0);

  const [charCount, setCharCount] = useState(0);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const words = text.split(' ');

    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    setCharCount(text.length);
  }, [text]);

  return (
    <Divider className='container'>
      
      <Divider>
        <br></br>
        <TextField
        className='bar'
          style={{background: "#ddd0c2"}}
          maxLength="100"
          value={text}
          onChange={changeHandler}
          placeholder='Que estas pensando?'
        ></TextField>
       
      <p>{text}</p>
      
        <Divider className="progress">
          <form>{100 - text.length} caracteres restantes.</form>
          <Divider>
              {(() => {
                if (100 - text. length == 0) {
                  
                  return (
                    Alert("alcanzo el limite de caracteres")
                    
                  )
                  
                }
              })()}
          </Divider>

        <Divider>
          <p className='word-count'>Palabras: {wordCount}</p>
          <p className='char-count'>Caracteres: {charCount}</p>
        </Divider>
      </Divider>
    </Divider>
    </Divider>
  );
}

export default App;