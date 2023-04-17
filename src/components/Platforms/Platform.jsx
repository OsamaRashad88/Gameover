import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const API_KEY = "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68";

export default function Platform() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  async function fetchGamesByPlatform(platform) {
    try {
      const response = await fetch(`${API_URL}?platform=${platform}`, {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      });
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGamesByPlatform(name);
  }, [name]);

  return (
    <div className="container">
      {loading ? (
        <div className="loading-layer">
          <div className="custom-loader"></div>
        </div>
      ) : (
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
                      <span className="badge bg-secondary">
                        {game.platform}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
