/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ userData, logOut }) {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={require('../../images/logo.png')} alt="" /> <span>Game Over</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav md-auto px-5 mb-2 mb-lg-0">
            {userData ? <><li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li><li className="nav-item">
                <Link className="nav-link color-nav-ul" to="/all-games">All</Link>
              </li><li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle color-nav-ul" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Platforms
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item color-nav-ul" to="/platforms/pc">PC</Link></li>
                  <li><Link className="dropdown-item color-nav-ul" to="/platforms/browser">Browser</Link></li>
                  <li></li>
                </ul>
              </li><li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle color-nav-ul" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  sort-by
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/sort-by/release-date">Release-date</Link></li>
                  <li><Link className="dropdown-item" to="/sort-by/popularity">Popularity</Link></li>
                  <li><Link className="dropdown-item" to="/sort-by/alphabetical">Alphabetical</Link></li>
                  <li><Link className="dropdown-item" to="/sort-by/relevance">Relevance</Link></li>
                  <li></li>
                </ul>
              </li><li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle color-nav-ul" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/categories/shooter">Shooter</Link></li>
                  <li><Link className="dropdown-item" to="/categories/racing">Racing</Link></li>
                  <li><Link className="dropdown-item" to="/categories/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/categories/social">Social</Link></li>
                  <li><Link className="dropdown-item" to="/categories/open-World">Open World</Link></li>
                  <li><Link className="dropdown-item" to="/categories/zombie">Zombie</Link></li>
                  <li><Link className="dropdown-item" to="/categories/fantasy">Fantasy</Link></li>
                  <li><Link className="dropdown-item" to="/categories/action-rpg">Action Rpg</Link></li>
                  <li><Link className="dropdown-item" to="/categories/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/categories/flight">Flight</Link></li>
                  <li><Link className="dropdown-item" to="/categories/battle-royale">Battle Royale</Link></li>
                  <li></li>
                </ul>
              </li></> : null}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {userData ? <><li className="nav-item d-flex align-items-center">
              Welcome <span className=' ms-2 username text-warning fw-bold'> {userData.first_name}</span>
            </li><li className="nav-item">
                <span className="nav-link btn nav-button mx-2" onClick={logOut}>Log out</span>
              </li></> : <><li className="nav-item">
                <Link className="nav-link px-4 fs-5 text-login-color" to="/login">Login</Link>
              </li><li className="nav-item">
                <Link className="nav-link btn nav-button mx-2" to="/register">Join Free</Link>
              </li></>}
          </ul>
        </div>
      </div>
    </nav>
  </>
}
