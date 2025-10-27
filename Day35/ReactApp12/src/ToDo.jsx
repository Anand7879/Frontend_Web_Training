import React, { useState } from 'react'

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>ToDo List</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new task..."
          style={{ padding: '10px', width: '70%', marginRight: '10px' }}
        />
        <button onClick={addTodo} style={{ padding: '10px 20px' }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              flex: 1
            }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo


// import React, { useState } from 'react'

// const ToDo = () => {
//     let [input,setInput] = useState('')
//     let [data,setData] = useState([])

//     function fun1(e){
//     setInput(e.target.value)
//     }

//     function btn(){
//     setData([...data,input])
//     }

//   return (
//       <div>
//      <h1>ToDo List</h1>
//      <div id = "todo">
        
//       <input onChange = {fun1} />
//       <button onClick = {btn}>Add</button>

//         {
//             data.map((a)=>{
//                 return(<>
//                 <div>

//                 <ul>

//                     <li>{a}</li>
//                 </ul>
//                 </div>
//                     </>
//                 )
//             })
//         }
//         </div>
//     </div>
//   )
// }

// export default ToDo
