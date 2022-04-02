import React,{useReducer} from 'react'

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return{count: state.count+1, showText: state.showText}
        case "toggleShowText":
            return{count: state.count, showText: !state.showText}
        default:
            return state
    }
}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {count:0, showText: false})
    return (
        <React.Fragment>
        <h1 style={{marginBottom: "10px", background: "blue", borderRadius: "5px"}}>UseReducer</h1>

            <h1>{state.count}</h1>
            <button onClick={()=>{
                dispatch({type: "toggleShowText"})
                dispatch({type: "INCREMENT"})
            }}>Click</button>
            {state.showText && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae.</p>}
        </React.Fragment>
    )
}

export default Reducer
