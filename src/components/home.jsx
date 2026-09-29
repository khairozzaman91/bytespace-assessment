import { useState } from "react";

function HomePage() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);
        console.log(count)
    }

    return (
        <>
            <h2>Welcome</h2>

            <h2>Value : {count}</h2>
            <button onClick={increment}>Add</button>
        </>
    );

}

export default HomePage;