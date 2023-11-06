
import { useCallback, useState } from "react"
import Die from "./Die"

function App() {
  
const [newValue, setNewValue] = useState(1)

  const handleRoll = useCallback(
    (dieValue: number) => {
      setNewValue(dieValue)
    }, [newValue]
  )

  return (
    <div>
      <Die onRoll={handleRoll}/>
      <p>{newValue}</p>
    </div>
  )
}

export default App
