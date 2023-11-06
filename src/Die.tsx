import { useCallback, useEffect, useState } from "react"


const Die = (props: {value: number, onRoll: (newVal: number) => void}) => {

    const [value, setValue] = useState(Math.floor(Math.random() * 7));

    useEffect (() => {
        props.onRoll(Math.floor(Math.random() * 7))
    }, [value])

    const handleClick = useCallback(() => {
        const rand = Math.floor(Math.random() * 7)
        setValue(rand)
    }, [])

    return (
        <div onClick={handleClick}>{props.value}</div>
    )
}

export default Die;