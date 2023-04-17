import React from "react";
import Threegames from "./Threegames";
export default function Home() {
  return (
    <div>
      <div className="intro w-50 mx-auto text-center">
        welcome to home
        <h2>Find & track the best free-to-play games!</h2>;
        <h3>
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </h3>
        <Threegames />
      </div>
    </div>
  );
}
