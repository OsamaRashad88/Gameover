import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function GetByCategory() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  async function fetchGames() {
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      setGames(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchGames();
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="loading-layer">
          <div className="custom-loader"></div>
        </div>
      ) : (
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
                      classNameName="card-img-top"
                    />
                    <div className="card-body">
                      <h2 className="card-title fw-bolder">{game.title}</h2>
                      <p className="card-text">{game.short_description}</p>
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
        </div>
      )}
    </>
  );
}
