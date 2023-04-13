import { useState } from 'react'
import CharacterSheet from './components/CharacterSheet';
import CharactersList from './components/CharactersList';


function App() {

  return (
    <div className='container'>
      <div className='bg-light rounded border p-5 my-5'><h2 className="text-center">Monster's track</h2></div>
      <div className='row'>
        <CharacterSheet />
        <CharactersList />
      </div>
    </div>
  )
}

export default App
