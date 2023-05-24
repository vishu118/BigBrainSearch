import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  const [darkTheme , setDarkTheme] = useState(false)
  return (
   <div className={darkTheme ? "dark" : ""}>
   <div className='bg-gray-800 text-white' >
   <Navbar/>
    <Footer/>
   </div>
   

   </div>
    
  )
}

export default App