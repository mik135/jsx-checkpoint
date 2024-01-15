import data from "./product.json"
import './App.css'
import Home from "./components/Home"
import InputName from "./components/InputName"
import { useState } from "react"

function App() {
  const [userName, setUserName] = useState("");
  function handleChange(e) {
    setUserName(e.target.value)
  }

  return (
    <div>
      <InputName handleChange={handleChange}/>
      <h1 className="helloMessage">Hello {userName ? userName : "There"} 👋</h1>
      <Home data={data} userName={userName}/>
    </div>
  )
}

export default App
