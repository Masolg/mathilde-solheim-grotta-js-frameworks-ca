import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";


function Game() {
    const [game, setGame] = useState({});

    let { id } = useParams();
    const url = "https://api.rawg.io/api/games/" + id;

    useEffect(() => {
        fetch (url)
            .then(response => response.json() )
            .then(json => {
                console.log(json);
                setGame(json);
            })
            .catch(error => console.log(error));
    }, [url]);


    return (
        <>
            <br />
            <img src={game.background_image} alt="game" width="60%" />
            <h1>{game.name}</h1>
            <p>
                <b>Description:</b> {game.description}
            </p>
            <a href={game.website}>
                <button>Website</button>
            </a>
        </>
    );
}

export default Game;
