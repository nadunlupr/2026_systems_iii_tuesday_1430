import { useEffect, useState } from "react";

export default function PromiseDemo(prop) {

    const [count, setCount] = useState(0);

    // useEffect(() => {

    //     console.log('useEffect');
    //     pizzaPromise
    //         .then((res) => {
    //             console.log('result: ', res);
    //             //do some more work
    //             //100 lines of code
    //         })
    //         .catch(err => {
    //             console.log('error: ', err);
    //         });

        

    //     console.log('do this after the promise call');

    // }, [count]);

    useEffect(() => {
        callThePromise();
    }, []);

    console.log('rendering...');
    return (
        <div>
            <h1>Handling promises - in console</h1>
            <button onClick={() => setCount(count + 1)} >Count</button>
            <p>Count {count}</p>
        </div>
    )
}

const callThePromise = async () => {
    try{
        const result = await pizzaPromise;
        console.log('result: ', result);
    }
    catch(err) {
        console.log('error: ', err);
    }
}

const isDoughAvailable = true;

const pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isDoughAvailable) {
            resolve(`Here's your Pizza! Enjoyyy!`);
        }
        else {
            reject('Sorry No Dough!');
        }

    }, 5000);
});