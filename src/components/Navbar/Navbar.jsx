import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ userData, logout }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          <h2>gameover</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userData && (
            <ul className="navbar-nav ms-5 mb-2 mb-lg-0 p-5">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="allgames">
                  allgames
                </Link>
              </li>
              <li>
                <a className="nav-item dropdown">
                  <Link
                    class=" dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Platform
                  </Link>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="platform/pc">
                        pc
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="platform/browser">
                        browser
                      </Link>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="nav-item dropdown px-5">
                <Link
                  className=" dropdown-toggle px-3"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort-by
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item black_link"
                      to="sort/release-date"
                    >
                      Release-date
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item black_link"
                      to="sort/popularity"
                    >
                      Popularity
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item black_link"
                      to="sort/alphabetical"
                    >
                      Alphabetical
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item black_link"
                      to="sort/relevance"
                    >
                      Relevance
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className=" dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item " to="categories/racing">
                      Racing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="categories/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="categories/social">
                      Social
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="categories/shooter">
                      Shooter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="categories/open-world">
                      Open-world
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="categories/zoombie">
                      Zoombie
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="categories/fantasy">
                      Fantasy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="categories/action-rpg">
                      Actiopn-rpg
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="categories/action">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="categories/flight">
                      Flight
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item "
                      to="categories/battle-royale"
                    >
                      Battle-royale
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          )}

          {userData ? (
            <li className="nav-item">
              <span className="navbar-brand cursor-pointer" onClick={logout}>
                logout
              </span>
            </li>
          ) : (
            <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="navbar-brand" to="login">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
