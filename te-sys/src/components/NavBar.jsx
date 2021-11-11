import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Styles.css";

const NavBar = () => {
  const [showEquipments, setShowEquipments] = useState(false);

  const navBarshowEquipments = () => {
    setShowEquipments(!showEquipments);
  };

  return (
    <header>
      <nav className="navbar navbar-dark fixed-top p-3 bg-secondary text-white position-absolute ">
        <div className="container-fluid">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon mx-auto"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <NavLink activeClassName="text-withe" exact to="/">
                <div className="container-logo">
                  <div className="logo"></div>
                </div>
              </NavLink>
              <button
                type="button"
                className="btn-close text-reset btn-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/usuario"
                  >
                    <i class="bi bi-person-fill mx-2"></i>
                    Usuario
                  </NavLink>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link text-white cursor-pointer"
                    data-toggle="collapse"
                    data-target="#collapseEquipments"
                    aria-expanded="false"
                    onClick={navBarshowEquipments}
                  >
                    <i class="bi bi-journal mx-2"></i>
                    Equipos
                  </span>
                </li>
                <div
                  className={(showEquipments ? "show" : "") + "collapse"}
                  id="collapseEquipments"
                >
                  <div className="card text-white bg-dark bg-gradient mb-3">
                    <div className="card-header">
                      <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/equipos">
                          <i class="bi bi-journal mx-2"></i>
                          Equipos
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/failure">
                          <i class="bi bi-bug mx-2"></i>
                          Incidentes
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/review">
                          <i class="bi bi-wrench mx-2"></i>
                          Revisiones
                        </NavLink>
                      </li>
                    </div>
                  </div>
                </div>

                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/terceros">
                    <i class="bi bi-people-fill mx-2"></i>
                    Terceros
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  className="btn btn-outline-success text-white"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;