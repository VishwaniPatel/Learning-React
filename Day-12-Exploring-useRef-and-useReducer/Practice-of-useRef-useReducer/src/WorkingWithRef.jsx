import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
const WorkingWithRef = () => {
    // const [inputValue, setInputValue] = useState("");
    // const count = useRef(0);
    const inputRef = useRef(null);
    console.log(inputRef.current);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // })
    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef.current);
      }, []);

    return (
        <>
            {/* For couting no. of renders */}
            {/* <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <p>
                Render Count: {count.current}
            </p> */}

            {/* To get the reference of input element */}
            <input ref={inputRef} type="text" />

        </>
    )
}

export default WorkingWithRef