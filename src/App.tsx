
import { useCallback, useMemo, useState } from "react"
import Die from "./Die"

function App() {
  
  // const [value1, setValue1] = useState(Math.floor(Math.random() * 7))
  // const [value2, setValue2] = useState(Math.floor(Math.random() * 7))
  // const [value3, setValue3] = useState(Math.floor(Math.random() * 7))
  
 

  // const handleRoll1 = useCallback(
  //   (dieValue: number, dieIndex) => {
  //     values[dieIndex] = 
  //     setValue1(dieValue)
  //   }, []
  // )
  // const handleRoll2 = useCallback(
  //   (dieValue: number) => {
  //     setValue2(dieValue)
  //   }, []
  // )
  // const handleRoll3 = useCallback(
  //   (dieValue: number) => {
  //     setValue3(dieValue)
  //   }, []
  // )
  const [values, setValues] = useState([1, 5, 6, 8])

   const sumDices = useMemo(() => {
    return values.reduce((acc, curV) => acc + curV, 0);
  }, [values]
  )

  const handleRoll = useCallback(
    (dieValue: number, dieIndex: number) => {
      setValues(prev => {
        const newValues = [...prev];
        newValues[dieIndex] = dieValue
        return newValues
      })
  }, [])

  return (
    <div>
      {values.map((value, index) => (
        <>
        <Die key={index} value={value} onRoll={(dieValue)=> {handleRoll(dieValue, index)}}  /> 
        <p>{value}</p> 
        </>
      ))}
      <p>{sumDices}</p>
    </div>
  )
  // return (
  //   <>
  //   <div>

  //     {values.map((value, index) => (
  //       <Die key={index} value={value} onRoll={handleRoll}>
  //     ))}
      
  //   </div>
  //   </>
      
  // )
}
{/* <Die value={values[]} onRoll={handleRoll1}/>
<Die value={values[]} onRoll={handleRoll2}/>
<Die value={value3} onRoll={handleRoll3}/>
<p>{sumDices}</p> */}
export default App;
