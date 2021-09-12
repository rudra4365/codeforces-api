import React from 'react'
import "./Standings.css"

const Standings = (props) => {
    return (
        <div>
            {props.rel >= 0 && <button className = "rt">Standings</button>}
            {props.rel < 0 && <button className = "rt-not-started">Standings</button>}
        </div>
    )
}

export default Standings
