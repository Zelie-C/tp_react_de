import { useCallback, useState } from "react"


const Die = (props: {onRoll: (newVal: number) => void}) => {

    const [value, setValue] = useState(Math.floor(Math.random() * 7));

    const handleClick = useCallback(() => {
        const rand = Math.floor(Math.random() * 7)
        props.onRoll(rand)
        setValue(rand)
    }, [])

    return (
        <div onClick={handleClick}>{value}</div>
    )
}

export default Die;