import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { AiOutlineCopy } from "react-icons/ai";

 const numbers = '01234567890123456789'
 const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
 const specialCharacters = "!&_#$@é!&_#$@é!&_#$@é!&_#$@é"
 
function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(20)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const handleGeneratePassword = (e) => {
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      toast.error('You must Select atleast one option', {position: "top-center"});
    }
    let characterList = '';
    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }
    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }
    if (includeNumbers) {
      characterList = characterList + numbers;
    }
    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }
    setPassword(createPassword(characterList))
  }
  const createPassword = (characterList) => {
    let password = '';
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  }

  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea');
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand('copy');
    newTextArea.remove();
  }

  const handleCopyPassword = (e) => {
    if (password === '') {
      toast.error('Nothing To Copy', {position: "top-center"});
    } else {
      copyToClipboard();
      toast.success('Password successfully copied to clipboard', {position: "top-center"});
    }
  }

  return (
    <div className='App'>
      <h1>REACT Password Generator</h1>
      <ToastContainer/>
      <div className='wrapper'>
        <div className='generator'>
          <div className='generator__password'>
            <h3>{password}</h3>
            <button onClick={handleCopyPassword} className='copy__btn'>
              <AiOutlineCopy />
            </button>
          </div>
          <div className='form-group'>
            <label htmlFor='password-strength'>Password length</label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type='number'
              id='password-strength'
              name='password-strength'
              max='30'
              min='6'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='uppercase-letters'>Include Uppercase Letters</label>
            <input
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type='checkbox'
              id='uppercase-letters'
              name='uppercase-letters'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lowercase-letters'>Include Lowercase Letters</label>
            <input
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='include-numbers'>Include Numbers</label>
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='include-symbols'>Include Symbols</label>
            <input
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type='checkbox'
              id='include-symbols'
              name='include-symbols'
            />
          </div>
          <button onClick={handleGeneratePassword} className='gr__log__button'>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default App