import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='w-screen bg-black min-h-screen p-8'>
      <h1 className='text-5xl font-bold text-green w-full text-center p-4 pt-0 text-white'>
        TODO LIST
      </h1>
      <Home/>
    </div>
  )
}

export default App