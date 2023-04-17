import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Gamedetails() {
  let { id } = useParams();
  let [gamedetails, setgamedetails] = useState([]);
  let [gameimg, setgameimg] = useState([]);

  async function getgamedetails() {
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    console.log(data);
    setgamedetails(data);
    setgameimg(data.screenshts);
  }
  useEffect(() => {
    getgamedetails();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className=" position-relative">
              <img
                className="w-100 rounded position-absolute game_thumbnail top-0 start-0"
                src={
                  `https://www.freetogame.com/g/${id}/thumbnail.jpg`
                    ? `https://www.freetogame.com/g/${id}/thumbnail.jpg`
                    : ""
                }
                alt=""
              />
            </div>
            <div className="d-flex justify-content-between ">
              <button className="btn btn-dark">free</button>
              <button className="btn btn-primary">playnow</button>
            </div>
          </div>
          <div className="col-md-9">
            <h2>{gamedetails.title}</h2>
            <h3>About {gamedetails.title}</h3>
            <p> {gamedetails.description}</p>
            <h3>Minimium system requirments</h3>
            {gamedetails.minimum_system_requirements ? (
              <>
                <div className="min_requirments mt-4 pb-4">
                  <div className="specfications px-2">
                    <h5>
                      Graphics :
                      {gamedetails.minimum_system_requirements.graphics}
                    </h5>
                    <h5>
                      Memory : {gamedetails.minimum_system_requirements.memory}
                    </h5>
                    <h5>OS : {gamedetails.minimum_system_requirements.os}</h5>
                    <h5>
                      Processor :
                      {gamedetails.minimum_system_requirements.processor}
                    </h5>
                    <h5>
                      Storage :{gamedetails.minimum_system_requirements.storage}
                    </h5>
                  </div>
                </div>
              </>
            ) : (
              <div className="pb-4"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
