
import { useCallback, useState } from "react"
import Die from "./Die"

function App() {
  
const [newValue, setNewValue] = useState(1)

  const handleRoll = (dieValue: number) => {
    useCallback(() => {
      setNewValue(dieValue)
    }, [newValue])
  }

  return (
    <Die onRoll={handleRoll}/>
  )
}

export default App
