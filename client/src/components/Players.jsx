import React from "react";
import Player from "./Player";
import './Players.css'

const Players = (props) => {
    // console.log(props)
    return(
        <div id="players">
            {props.players.map(item=>(
                <Player  player={item} key={item.players_id} category={item}/>
            ))}
        </div>
    )
}

export default Players;