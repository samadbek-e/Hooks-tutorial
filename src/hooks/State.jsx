import React, {useState} from 'react'

const Hey = () => {
    const [counter, setCounter] = useState(0)

    const Count = () =>{
        setCounter(counter+1)
        console.log(counter);
    }
    return (
        <React.Fragment>
        <h1 style={{marginBottom: "10px", background: "blue", borderRadius: "5px"}}>UseState</h1>

            <h1>{counter}</h1>
            <button onClick={Count}>hello</button>
        </React.Fragment>
    )
}

export default Hey
