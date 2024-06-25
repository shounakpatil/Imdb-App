import React from 'react'
import {useEffect} from 'react'
import Sidebar from './Sidebar'
import Display from './Display'
import Header from './Header' 
import { FetchFromAPI } from '../utils/FetchFromAPI'
const Feed = () => {
  const[selectedCategory, setSelectedCategory]=React.useState('series/');
//   console.log(selectedCategory);

  const [display, setDisplay]=React.useState([]);
  async function gatherData(){
    const data=await FetchFromAPI(`${selectedCategory}`)
    if (data){
        setDisplay(data)
    }
  }
    useEffect(()=>{
      gatherData();
    },[selectedCategory]);
  return (
    <div className="feed">
    <Header
    display={display}
    />
   <Sidebar
     selectedCategory={selectedCategory}
     setSelectedCategory={setSelectedCategory}
   /> 
<Display
 display={display}
/>
   </div>
  )
}

export default Feed;