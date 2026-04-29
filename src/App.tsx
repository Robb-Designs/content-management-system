//import React from 'react'
import TextInput from './components/TextInput/TextInput';
import './App.css'

function App() {
 

  return (
    <>
      <section id="center">
       <TextInput onTextChange={(text) => console.log('Text changed: ', text)} input="" placeholder="Type something..." />
      </section>

    </>
  )
}

export default App
