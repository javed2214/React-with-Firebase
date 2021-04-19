import './App.css';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {db} from './firebase_config'
import firebase from 'firebase'
import Todo from './Todo'

// import firebase from 'firebase/app';

function App() {

  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  function getTodos(){
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(function(querySnapshot){
      setTodos(querySnapshot.docs.map((doc) => (
        {
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress
        }
      )))
    })
  }

  const addTodo = (e) => {
    e.preventDefault()
    db.collection('todos').add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    })
    setTodoInput('')
  }

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h2 style={{textAlign: 'center'}}>Todo App 🔥</h2>
        <form onSubmit={addTodo} autoComplete='off'>
          <TextField id="standard-basic" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} label="Add Todo" style={{maxWidth: '400px', width: '90vw'}} />
        </form>
        <div style={{marginTop: "10px"}}>
          {todos.map((todo) => {
            return(<Todo todo={todo.todo} inprogress={todo.inprogress} id={todo.id} key={todo.id} />)
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
