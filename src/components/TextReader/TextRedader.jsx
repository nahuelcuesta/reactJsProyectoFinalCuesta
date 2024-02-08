/* import React, { useState } from 'react';

const TextReader = ()=>{
    const [text, setText] = useState('hola gatuno');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleReadText = () => {
    if (text) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  }
    return(
        <div>
        <button onClick={handleReadText}>Leer Texto</button>
      </div>
    )
}

export default TextReader; */