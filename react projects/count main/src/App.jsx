  import { useState } from 'react'


function App() {
const [count, setCount] = useState(0)


const increment = () => {
setCount(count + 1)
}


const decrement = () => {
setCount(count - 1)
}


const reset = () => {
setCount(0)
}


return (
<div className="container">
<h1>COUNTER</h1>
<div className="count">{count}</div>


<div className="buttons">
<button className="btn decrement" onClick={decrement}>Decrement</button>
<button className="btn reset" onClick={reset}>Reset</button>
<button className="btn increment" onClick={increment}>Increment</button>
</div>
</div>
)
}


export default App