import "./App.css"
import Counter from "./Counter"
import Team from "./Team"
import Users from "./Users"
import Friends from "./Friends"

function App() {
    function handleClick() {
        alert("button clicked")
    }

    const handleClick2 = () => {
        alert("button click me 2")
    }

    const addToFive = (num) => {
        alert(num + 5)
    }

    return (
        <>
            <h2>React Core Concepts 2</h2>

            <Friends></Friends>

            <Users></Users>

            <Team></Team>

            <Counter></Counter>

            <button className='btn' onClick={handleClick}>
                Click me
            </button>

            <button className='btn' onClick={handleClick2}>
                Click me 2
            </button>

            <button
                className='btn'
                onClick={() => {
                    alert("button click me again")
                }}>
                Click me again
            </button>

            {/* NOTE: function a parameter send korle obosshoi arrow function use korte hobe. */}
            <button
                className='btn'
                onClick={() => {
                    addToFive(15)
                }}>
                Add 5 To Number
            </button>
        </>
    )
}

export default App
