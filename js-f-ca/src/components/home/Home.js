import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row"; //Gotten from Bootstrap
import Col from "react-bootstrap/Col"; //Gotten from Bootstrap
import Card from "react-bootstrap/Card"; //Gotten from Bootstrap
import Button from "react-bootstrap/Button"; //Gotten from Bootstrap
import { Link } from "react-router-dom";



export function Home() {

    const url = "https://api.rawg.io/api/games";
    const [games, setGames] = useState ([]);
    const [filteredGames, setFilteredGames] = useState ([]);

    useEffect ( () => {
        fetch (url)
            .then(response => response.json() )
            .then(json => {
                console.log(json.results);
                setGames(json.results);
                setFilteredGames(json.results);
            })
            .catch(error => console.log(error));
    }, []);


    // Got function from Noroff Javascript Frameworks MA4 Lesson
    const filterGames = function(e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = games.filter(function(char)
        {
            const lowerCaseName = char.name.toLowerCase();
            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });
        setFilteredGames(filteredArray);
    };


    return (
        <>
            <div className="SearchGame">
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={event => filterGames(event)}>
                </input>
            </div>
            <Row>
                {filteredGames.map(game => {
                    const { id, name, background_image, rating, released } = game;

                    return (
                        <Col sm={6} md={3} key={id}>

                            <Card>
                                <Card.Img variant="top" src={background_image} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>Rating: {rating}</Card.Text>
                                    <Card.Text>Released: {released}</Card.Text>
                                    <Link to={"game/" + id}>
                                        <Button variant="secondary" block>
                                            View
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default Home;
