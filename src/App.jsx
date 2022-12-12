import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { fireEvent } from '@testing-library/react';




function App() {

  const [data,setData] = useState({
    name:"",
  email:"",
  mobile:""
  })
  const [todo, setTodo] = useState([])

  const handleChange = (event) => {
    // setData(e.target.value)
    setData({...data, [event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // setTodo({...todo, [event.target.name]:[event.target.value]})
    console.log(data)
     const {name,email,mobile} = data
    setTodo([...todo,(name&&email&&mobile)])
    // const {id,value} =e.target
    // setTodo({...todo,[id]:value})
    // console.log(todo)
    // setData({
    //   email:"",
    //   email:"",
    //   mobile:""
    // })
    
  }

 

  return(
    <div className='App'>
       <input name='name' id='name'  onChange={handleChange} type="text" placeholder='enter name' />
       <input name='email' id='email'   onChange={handleChange} type="text" placeholder='enter email'/>
       <input name="mobile" id='mobile'  onChange={handleChange} type="number" placeholder='enter number' />
       <button onClick={handleSubmit}>ADD</button>


       {
        todo.map((el,i) => {
          return(
            <>
             <h1>{el}
               <button onClick={() => {todo.splice(i,1); setTodo([...todo])}}>Delete</button>
             </h1>
            </>
          )
        })
       }
    </div>
  )
}

export default App;
