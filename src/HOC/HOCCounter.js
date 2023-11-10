import React , { useState } from "react"

const HOCCounter = ( OldComponent , step ) => {
    const NewComponent = () => {
        const [number , setNumber] = useState(0);

        const increaseNumber = () => setNumber(prevNum => prevNum + step);

        return <OldComponent number={number} increase={increaseNumber}/>
    }

    return NewComponent;
} 

export default HOCCounter;