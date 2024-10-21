/**==================================================================
 **              Counter Component
 *?  This component manages a counter using the React useState hook.
 *?  It allows users to increment or decrement the counter value.
 *@param none
 *@return JSX element
 *====================================================================**/

// ANCHOR: Importing necessary React hooks
import { useState } from "react"

// SECTION: Counter component declaration
export default function Counter() {
    // SECTION: State declaration using useState hook
    // NOTE: 'count' stores the counter value, 'setCount' updates it
    const [count, setCount] = useState(0)

    // TODO: Function to handle incrementing the counter
    const handleAdd = () => {
        // REVIEW: Increment counter value by 1
        const newCount = count + 1
        // NOTE: Set the new counter value
        setCount(newCount)
    }

    // TODO: Function to handle decrementing the counter
    const handleReduce = () => {
        // REVIEW: Decrement counter value by 1
        const newCount = count - 1
        // NOTE: Set the new counter value
        setCount(newCount)
    }

    // SECTION: Rendering JSX
    return (
        <div>
            {/* STUB: Displaying the current counter value */}
            <h3>Counter: {count}</h3>

            {/* TODO: Button to increment the counter, triggers handleAdd */}
            <button className='btn' onClick={handleAdd}>
                Add
            </button>

            {/* TODO: Button to decrement the counter, triggers handleReduce */}
            <button className='btn' onClick={handleReduce}>
                Reduce
            </button>
        </div>
    )
}
