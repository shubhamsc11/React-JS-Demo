import React, {useState} from 'react'

export default function TextForm(props) {
  const changeTextToUppercase = () => {
    // console.log('Clicked on uppercase!!!' + "\nold text - ", text);
    setText(text.toUpperCase());
  }

  const changeTextToLowercase = () => {
    setText(text.toLocaleLowerCase());
  }

  const updateTextArea = (event) => {
    setText(event.target.value);
  }

  const interChangeText = () => {
    var interChangedText = '';
    for(let i=0; i < text.length; i++) {
      let char = text[i];
      interChangedText += (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
    }
    setText(interChangedText);
  }

  const clearTextAtLastIndex = () => {
    setText(text.substring(0, text.length -1));
  }

  const deleteText = () => {
    setText('');
  }

  const reverseText = () => {
    setText(text.split('').reverse().join(''));
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)  // Copies the current text to clipboard
      .then(() => {
        const success_msg = 'Text copied to clipboard!';
        console.log(success_msg);
        alert(success_msg);
      })
      .catch((err) => {
        const error_msg = 'Failed to copy: '
        console.error(error_msg, err);
        alert(error_msg, err);
      });
  };

  const [text, setText] = useState('');
  const wordsLength = text.trim().length > 0 ? text.split(" ").length : 0

  return (
    <>
      <div>
        <h4>{props.heading}</h4>
        <div className='container my-3'>
          <label htmlFor='myContainer' className='form-label'>User Textarea</label>
          <textarea className='form-control' id='textContainer' onChange={updateTextArea} value={text} placeholder='Enter text here...' rows={5}></textarea>
        </div>
        <button className='btn btn-primary' onClick={changeTextToUppercase}>Convert To UpperCase</button>

        <button className='btn btn-info btn-sm mx-2' onClick={changeTextToLowercase}>Convert To LowerCase</button>

        <button className='btn btn-light mx-2' onClick={interChangeText}>Interchange Text</button>

        <button className='btn btn-outline-secondary mx-2' onClick={clearTextAtLastIndex}>Clear Text</button>

        <button className='btn btn-danger mx-2' onClick={deleteText}>Delete Text</button>

        <button className='btn btn-outline-dark mx-2' onClick={reverseText}>Reverse Text</button>

        <button className='btn btn-warning mx-2' onClick={handleCopyClick}>Copy Text</button>

      </div>

      <div className='container my-3'>
        <h4>Your Entered Text Summary</h4>
        <p>Words: {wordsLength} and Characters: {text.length}</p>
        <p>Minutes Read: {0.008 * wordsLength}</p>
      </div>

      <div className='container my-3'>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : 'Enter something in above textarea!'}</p>
      </div>
    </>
  )
}
