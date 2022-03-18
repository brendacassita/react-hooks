import { useEffect, useState } from "react";

// hooks are new in React > 16.8
// Rules:
// can only use in functional components
// hooks start with 'use' word
    // must be at top level of function (can't nest - is if statements)
// useEffect, useState, useContext defined by React and come standard
// you/3rd party can define own hooks
// ie useLocation, useParams by react-router



const CounterHooks = (props) =>{
  // useState allows us to have state and update state
  const [count, setCount] = useState (0)
  const [count2, setCount2] = useState (0)

  // useEffect 
  // allows us to have lifecycle methods
  // componentDidMount, componentDidUpdate, componentWillUnmount
  // useEffect: is a function that takes a function:param1, and dependency arr:param2
  

  useEffect(()=>{
    console.log('CounterHooks useEffect with []') // once its mounted its a good time to do 
  }, [])                                // axios calls - wait until component is mounted so
                                        //  we know its there ..this gets called on mount and when setCount 
                                        // is called
  useEffect(()=>{
    console.log('CounterHooks useEffect with [count]')  // changing state of count                       
    if(count ===10){
      setCount(0)
  }
    // this is getting called even though component did mount
        // return ()=>{
        //     console.log('[count]:, CounterHooks useEffect return cb called')
        // }
  }, [count])  

  useEffect(()=>{
    console.log('CounterHooks useEffect with [count, count2]')  //                     
  }, [count, count2])  



  console.log('CounterHooks rendering')
  return(
    <div>
      <h1>Functional Counter Component</h1>
      <h1>Functional Counter:</h1>

      <p>count state in functional Counter: {count}</p>
      <button on onClick={()=>setCount(count+1)}>add</button>

      <p>count2:</p>
      <button on onClick={()=>setCount2(count2+1)}>add</button>

    </div>
  )
}

export default CounterHooks



// useEffect: is a function that takes a function:param1, and dependency arr:param2
// function useEffect that takes a function that will be called on unmount

// part1
// useEffect()

// part 2 takes a cb function:param1, and dependecy arr:param2
// useEffect(()=>{}.[])

// part 3 
// this callback will called on mount, when state changes if that state is
// in dependency array
// useEffect(()=>{
// call on mount and when count state changes
//   },[count])

// useEffect(()=>{
// on called on mount
//   },[])

// useEffect(()=>{
// on called on mount, and when any state changes (lead to stackoverflow)
// getData()
// })

// getData = ()=>{
// let res = axios
// setData(red.data)
// }

// part 4 the cb function that useEffect takes as it first argument can return function 
//  useEffect(()=>{
//called when compents unmounts
//return()=>{
//      }
//  })