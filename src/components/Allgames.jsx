import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Allgames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://free-to-play-games-database.p.rapidapi.com/api/games",
          {
            headers: {
              "X-RapidAPI-Key":
                "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );
        setGames(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-layer">
        <div className="custom-loader"></div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {games.map((game) => (
          <div key={game.id} className="col-md-3 p-3">
            <Link
              to={"/gamedetails/" + game.id}
              className="text-decoration-none"
            >
              <div className="card bg-light border-0 shadow">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title fw-bolder">{game.title}</h2>
                  <p className="card-text">
                    {game.short_description.split(" ").slice(0, 5).join(" ")}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-secondary">{game.genre}</span>
                    <span className="badge bg-secondary">{game.platform}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
