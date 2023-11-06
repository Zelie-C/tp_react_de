import { useCallback, useState } from "react"


const Die = (props: {value: number}) => {

    const [value, setValue] = useState(0);

    const handleClick = useCallback(() => {
            setValue(Math.floor(Math.random() * 7))
        }, [value])

    return (
    
        <div style={{color: pink}} onClick={handleClick} onRoll={props.value}>{value}</div>

    )
}

export default Die;