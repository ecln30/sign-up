
import React, { useState } from 'react';
import Form from './components/Form' 
import './App.css';
import Slogan from "./components/Slogan"

function App() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleChange(e) {
    const el = e.currentTarget
    console.log("handleChange")
    if(el.name === "first") {
       setFirstname(el.value)
    }
    else if(el.name === "last"){
        setLastname(el.value)
    }
    else if(el.name === "email"){
      setEmail(el.value)
    }
    else if(el.name === "psw") {
      setPassword(el.value)
    }
  }

  function handleSumit() {
    console.log("handleSumit")
  }

  return (
    <div className="App">
     <Slogan />
     <Form 
      firstname={firstname}
      lastname={lastname}
      email={email}
      password={password}
      handleChange={handleChange}
      handleSumit={handleSumit}
     />
    </div>
  );
}

export default App;
