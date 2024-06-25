import { useState } from 'react'
import './App.css'
import Feed from './components/Feed'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
  console.log(process.env.REACT_APP_RAPID_API_KEY);
    
  return (
    <>
      <Feed />
     <Footer/>
    </>
  )
}

export default App;
