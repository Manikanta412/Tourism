
import  React, {useState} from 'react';
function Counter(){
    const [count, setCount]=useState(0);
    const increment=()=>{
setCount(count+1);
    };
const decrement=()=>{
    setCount(count-2);
};
    const reset=()=>{
        setCount (0);
    };
    return(
        <div>
            <h2>Counter:{count}</h2>
            <h3>hello</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default Counter;