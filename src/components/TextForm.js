import React from 'react'
import useUndoRedo from '../components/UseUndoRedo.js';
import 'animate.css';

export default function TextForm(props) {
  const changeTextToUppercase = () => {
    // console.log('Clicked on uppercase!!!' + "\nold text - ", text);
    // setText(text.toUpperCase());
    updatePresent(state.toUpperCase());
    props.showAlert('light', 'Text converted in the uppercase!')
  }

  const changeTextToLowercase = () => {
    // setText(text.toLocaleLowerCase());
    updatePresent(state.toLowerCase());
    props.showAlert('info', 'Text converted in the lowercase!')
  }

  const updateTextArea = (event) => {
    // setText(updatePresent);
    updatePresent(event.target.value);
  }

  const interChangeText = () => {
    var interChangedText = '';
    for(let i=0; i < state.length; i++) {
      let char = state[i];
      interChangedText += (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
    }
    // setText(interChangedText);
    updatePresent(interChangedText);
  }

  const clearTextAtLastIndex = () => {
    // setText(text.substring(0, text.length -1));
    updatePresent(state.substring(0, state.length - 1));
  }

  const deleteText = () => {
    // setText('');
    updatePresent('');
    props.showAlert('danger', 'OMG, Text deleted !!!');
  }

  const reverseText = () => {
    // setText(text.split('').reverse().join(''));
    updatePresent(state.split('').reverse().join(''));
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(state)  // Copies the current text to clipboard
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

  // const [text, setText] = useState('');
  const { state, undo, redo, updatePresent } = useUndoRedo('');
  const wordsLength = state.trim().length > 0 ? state.split(' ').filter(String).length : 0

  return (
    <>
      <div>
        <h4>{props.heading}</h4>
        <div className='container my-3'>
          <label htmlFor='myContainer' className='form-label'>User Textarea</label>
          <textarea className='form-control' id='textContainer' onChange={updateTextArea} value={state} placeholder='Enter text here...' rows={5}></textarea>
        </div>
        <button className='btn btn-primary' onClick={changeTextToUppercase}>Convert To UpperCase</button>

        <button className='btn btn-info btn-sm mx-2' onClick={changeTextToLowercase}>Convert To LowerCase</button>

        <button className='btn btn-light mx-2' onClick={interChangeText}>Interchange Text</button>

        <button className='btn btn-outline-secondary mx-2' onClick={clearTextAtLastIndex}>Clear Text</button>

        <button className='btn btn-danger mx-2' onClick={deleteText}>Delete Text</button>

        <button className='btn btn-outline-dark mx-2' onClick={reverseText}>Reverse Text</button>

        <button className='btn btn-warning mx-2' onClick={handleCopyClick}>Copy Text</button>

        <button className='btn btn-light mx-2 animate__animated animate__zoomInRight' style={{color: '#55abe6', backgroundColor: 'white'}} onClick={undo}>Undo Text</button>
        <button className='btn btn-light mx-2 animate__animated animate__zoomInLeft' style={{color: '#abd982', background: 'white'}} onClick={redo}>Redo Text</button>

      </div>

      <div className='container my-3'>
        <h4>Your Entered Text Summary</h4>
        <p>Words: {wordsLength} and Characters: {state.split(' ').join('').length}</p>
        <p>Minutes Read: {0.008 * wordsLength}</p>
      </div>

      <div className='container my-3'>
        <h4>Preview</h4>
        <p>{state.length > 0 ? state : 'Enter something in above textarea!'}</p>
      </div>
    </>
  )
}
