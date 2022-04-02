import React from 'react'
import State from "./hooks/State.jsx"
import Reducer from './hooks/Reducer.jsx'
import Ref from './hooks/Ref.jsx'
import Context from './hooks/useContext/Context.jsx'
const App = ()=> {
  return (
    <React.Fragment>
    
    <div className="App">
    <State />
    </div>

    <div className="App">
    <Ref />
    </div>

    <div className="App">
    <Reducer />
    </div>
    <div className="App">
      <Context />
    </div>
    </React.Fragment>
    
  )
}

export default App
