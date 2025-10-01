import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {

  return <div className="body bg-dark text-light">

    <header class="container-fluid">
      <nav class="navbar fixed-top navbar-dark">
        <a class="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
        <menu class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="play.html">Play</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="scores.html">Scores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>
    
    <main>Replace with app stuff I think</main>
    
    <footer class="bg-dark text-white-50">
      <div class="container-fluid">
        <span class="text-reset">Author Name(s)</span>
        <a class="text-reset" href="https://github.com/webprogramming260/simon-css">Source</a>
      </div>
    </footer>
    
    </div>;


}