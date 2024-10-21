import { useState } from "react"

export default function Team() {
    // NOTE: state should be placed before component heading
    const [team, setTeam] = useState(11)

    // TODO: Add button handler
    const handleAdd = () => {
        const newTeam = team + 1
        setTeam(newTeam)
    }

    // TODO: Remove button handler
    const handleRemove = () => {
        setTeam(team - 1)
    }

    const teamStyle = {
        border: "2px solid #f1f1f1",
        margin: "15px",
        padding: "15px",
        borderRadius: "15px"
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}
