import { useState } from "react";
export default function Counter() {
    let count = 0;
    function handleIncrease() {
        count = count + 1;
        setNewCount(newCount + 1);
    }
    function handleDecrease() {
        count = count - 1;
        setNewCount(newCount - 1);
    }
    function printCount() {
        alert(count);
    }
    // const [newCount, setNewCount] = useState(0);
    // const testArray = ["first", "second"]
    // const [firstItem, secondItem]=testArray
    // function setState(prev){
    // return 5
    // }
    //useState() => ["state","state updater function"]
    // let variable = 5;
    // function setVariable(x:number){
    //     variable = x;
    // }
    return (
        <div className="w-full h-64 text-black bg-red-50 border rounded-2xl flex flex-col gap-4">
            {/*<p>{firstItem}</p>*/}
            <p>Count{count}</p>
            <p>New count {newCount}</p>
            <div className="flex gap-4">
                <button className="border hover:cursor-pointer" onclick={handleIncrease}>Increase
                </button>
                <button className="border hover:cursor-pointer" onClick={handleDecrease}>Decrese
                </button>
                <button className="border hover:cursor-pointer" onClick={printCount}>Print
                </button>
            </div>
        </div>
    );
}