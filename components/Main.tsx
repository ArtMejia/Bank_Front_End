import { FC, useState } from "react";

// Prop interfeace goes here

const Main: FC =() => {
    const [getCounter, setCounter] = useState<number>(0);
    const [secGetCounter, secSetCounter] = useState(100);
    // add a minus 1 button
    // add another state starting value 100
    // create three buttons that each affect the second state diffrently
    // add text field and button to change the counter to value in the field
    return (
        <div>
            <h1>Main</h1>
            <p>Counter: {getCounter} </p>
            <button onClick={()=>{
                setCounter(getCounter+1)
            }}>Add 1</button>
            <button onClick={()=>setCounter(getCounter-1)}>Minus 1</button>
            <p>2nd Counter: {secGetCounter}</p>
            <button onClick={()=>secSetCounter(secGetCounter/5)}>Divide By 5</button>
            <button onClick={()=>secSetCounter(secGetCounter+100)}>Add 100</button>
            <button onClick={()=>secSetCounter(secGetCounter*2)}>Multiply By 2</button>
        </div>
    )
}

export default Main