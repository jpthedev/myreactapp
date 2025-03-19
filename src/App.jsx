import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    setUsers(result);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className='head-row'>
            <div>ID</div>
            <div>Name</div>
            <div>User Name</div>
            <div>Email</div>
            <div>Phone No.</div>
        </div>
        {users.map(user => (
          <div  className='body-row'>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default App
