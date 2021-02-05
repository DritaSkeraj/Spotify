import React from 'react';
import "../../styles/artist-page.css";
import backgroundImg  from '../../assets/rock-concert.jpg';

const ArtistHeader = (props) => {
    return(
        <>
        <img src={backgroundImg} />
        <div className="container mt-3 justify-center">
          <div className="jumbotron d-flex justify-content-center flex-column">
            <h6>33,000,575 MONTHLY LISTENERS</h6>
            <h1 className="display-4">Queen</h1>
            <div className="d-flex d-md-none  row">
              <a className="artist-pg-play-btn btn" href="#" role="button">PLAY</a>
              <a
                className="artist-pg-follow-btn btn btn-outline-light btn-lg"
                href="#"
                role="button">FOLLOW</a>
            </div>
            <div className="d-none d-md-flex column">
              <a className="artist-pg-play-btn btn" href="#" role="button">PLAY</a>
              <a
                className="artist-pg-follow-btn btn btn-outline-light btn-lg"
                href="#"
                role="button"
                >FOLLOW</a
              >
            </div>
          </div>
        </div>
        </>
    )
}

export default ArtistHeader;