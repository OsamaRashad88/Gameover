import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Sort() {
  const { sortType } = useParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchGames() {
    try {
      const response = await axios.get(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          headers: {
            "X-RapidAPI-Key":
              "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
          params: {
            "sort-by": sortType,
          },
        }
      );
      setGames(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchGames();
  }, [sortType]);

  return (
    <div className="container">
      <h1>Sort Games</h1>

      {loading && (
        <div className="loading-layer">
          <div className="custom-loader"></div>
        </div>
      )}

      <div className="row">
        {games.map((game) => (
          <div className="col-md-4 mb-3" key={game.id}>
            <Link
              to={"/gamedetails/" + game.id}
              className="text-decoration-none"
            >
              <div className="card">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{game.title}</h5>
                  <p className="card-text">{game.short_description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Release Date: {game.release_date}
                  </small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
