
import { useState } from 'react'
import './App.css'
import Textlength from './components/Textlength'


const App = () => {
  const [text, setText] = useState('')
  const changeListener =(event) => {
    setText(event.target.value)
  }

  return(
    <>
      <input type="text" placeholder='Enter Your Text' value={text} onChange={changeListener} />
      <Textlength length= {text.length}></Textlength>
      {text.length > 30 ? <p>Text too long🛑</p> : null}
      {text.length < 2 ? <p>Text too short❌</p> : null}
      
    </>
  )

}



export default App