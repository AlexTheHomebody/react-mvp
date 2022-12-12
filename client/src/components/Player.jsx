import React from "react"
import Sidebar from "./Sidebar"


function Player({player}) {



    return(
        <div className="card">
            <h2>{player.name}</h2>
            <h3>Character Name: {player.character_name}</h3>
            <h3>Skill Level:{player.skill_level}</h3>
        </div>
    )
}

export default Player