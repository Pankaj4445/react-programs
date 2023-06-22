import { useState } from "react";
import { Display } from "./Display";
import Button from "./Button";

export default function App(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter+1);
    }

    return (
        <>
            <Button onIncrement={incrementCounter}/>
            <Display message={counter} value="react" />
        </>
    );
}