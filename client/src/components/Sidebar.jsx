// import React from "react";
import React, { useRef } from 'react';

function Sidebar() {
    const playerRef = useRef(null);
    const characterRef = useRef(null);
    const skillRef = useRef(null);


const createPlayer = () => {
    console.log(`Name: ${playerRef.current.value}`);
    console.log(`Name: ${characterRef.current.value}`);
    console.log(`Name: ${skillRef.current.value}`);
    
    
    
    const base_url = 'http://localhost:9999/'
    const request = {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: playerRef,
            charecter_name: characterRef,
            skill_level: skillRef})
        }
        console.log(request)
        fetch(base_url + 'players', request)
        .then(res => res.json())
        .then(data => {
            createNewPlayer();
        })
    }
    
    return(
        <div className="side">
            <h2>Create a New Player</h2>
            <h3>Player Name</h3>
            <input type="text" name="" id="" ref={playerRef} />
            <h3>Character Name</h3>
            <input type="text" name="" id="" ref={characterRef} />
            <h3>Skill Level</h3>
            <input type="text" name="" id="" ref={skillRef}/>
            <button onClick={createPlayer}>Create</button>
        </div>

    )
}

export default Sidebar;