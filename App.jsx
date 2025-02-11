//functional componenet
import "./App.css"
import {useState} from 'react'
 
const App=()=>{
  const [value1,setValue1] =useState()
  const [value2,setValue2] =useState()
  const [result,setResult] = useState()
  //defination for handlechange
  const handleChange=(event,type) => {
    console.log(event.target.value)
    if(type=='value1') {
      setValue1(event.target.value)
    }
    else if(type=='value2') {
      setValue2(event.target.value)
    }
  }
  const handleClick=() => {
    let v1=parseInt(value1)
    let v2= parseInt(value2)
    setResult(v1+v2)
  }

  return (
    //fragment
    <>
      <h1>hello world</h1>
      <input type = "text"
       placeholder="First value"
       onChange={(e)=>handleChange(e,'value1')}
       />
      <input type = "text"
       placeholder="second value"
       onChange={(e)=>handleChange(e,'value2')}
       />
      <button onClick={handleClick}>add</button>
      <p>answer:{result}
        
      </p>
      
    </>
  )
}
export default App