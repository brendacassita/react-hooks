import { useState } from 'react';
import './App.css';
import Counter from './class/Counter';

function App() {
  const [showThings, setShowThings] = useState(true)
  const [toggleCount, setToggleCount] = useState(0)

  
  // show component did unmount cb
  const renderThings = ()=>{
    return (
      <div>
        {/* giving someNumber prop to {toggleCount} changes state in app.js */}
        {/* sending new props causes it to rerender 
        and calls render and componentDidUpdate methods */}
        <Counter someNumber={toggleCount}/>
      </div>
    )
  }

  const toggle = ()=>{
    setToggleCount(toggleCount +1)
    // setShowThings(!showThings) comment out to not unmount/mount to only update count
  }


  return (
    <div className='App' style={{border:'5px solid hotpink'}}>
      <h1> App Component</h1>


      <p>toggled {toggleCount} times</p>
      {/* <button onClick={toggle}>toggle things()</button> */}
      <button onClick={toggle}>update toggleCount in App.js</button>  
      <Counter someNumber={toggleCount}/>
      <hr/>


      {/* {showThings && renderThings()} */}
      {/* if this is true calling function and render my things, if not i wont */}
      {/* setting state showThings to render components (add/remove to DOM) */}
      {/* <button onClick={()=>setShowThings(!showThings)}>toggle</button> */}
      
    </div>
  );
}

export default App;