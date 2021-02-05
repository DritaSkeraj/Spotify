import React, { Component } from "react";
import "../../styles/styles.css";
import Player from "../Player";
import Menu from "../album/Menu";
import ArtistHeader from "./ArtistHeader";
import { Row, Spinner } from "react-bootstrap";
import backgroundImg from "../../assets/rock-concert.jpg";
import SingleSong from "../SingleSong";
import {withRouter, Link} from 'react-router-dom';

class ArtistPage extends Component {
  state = {
    albums: "",
    artistName: "",
    numOfFans: 0,
    loading: true,
  };

  componentDidMount = () => {
    this.fetchAlbums(this.props.match.params.artist);    
  };

  fetchAlbums = (artist) => {
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a44588e47dmsh9b184d3ebdf2d08p1faa3djsn2e64ecb46487",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      },
      this.setState({ loading: true })
    )
      .then((response) => response.json())
      .then((fetchedAlbum) =>
        this.setState({ albums: fetchedAlbum, loading: false })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  render() {

    return (
      <>
        <Menu />

        <section className="mainframe">
          <div
            className="main-content"
            style={{ overflowY: "hidden !important" }}
          >
            <img src={backgroundImg} />
            <div>
            
              <div
                className="container mt-3 justify-center"
                style={{ position: "relative" }}
              >
                <div className="jumbotron d-flex justify-content-center flex-column">
                {this.state.loading ? (
                    <Spinner
                      animation="grow"
                      variant="light"
                      style={{
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    />
                ) : (
                  <div>
                    <h1 className="display-4">{this.state.albums.data[0].artist.name}</h1>
                  </div>)}
                  <div className="d-flex d-md-none  row">
                    <a
                      className="artist-pg-play-btn btn"
                      href="#"
                      role="button"
                    >
                      PLAY
                    </a>
                    <a
                      className="artist-pg-follow-btn btn btn-outline-light btn-lg"
                      href="#"
                      role="button"
                    >
                      FOLLOW
                    </a>
                  </div>
                  <div className="d-none d-md-flex column">
                    <a
                      className="artist-pg-play-btn btn"
                      href="#"
                      role="button"
                    >
                      PLAY
                    </a>
                    <a
                      className="artist-pg-follow-btn btn btn-outline-light btn-lg"
                      href="#"
                      role="button"
                    >
                      FOLLOW
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "18em !important" }}>
                <ul
                  className="nav nav-tabs justify-content-center"
                  id="myTab"
                  role="tablist"
                  style={{ marginTop: "18em !important" }}
                >
                  <li className="nav-item d-none d-md-flex" role="presentation">
                    <a
                      className="nav-link"
                      id="trending-tab"
                      data-toggle="tab"
                      href="#trending"
                      role="tab"
                      aria-controls="trending"
                      aria-selected="true"
                      data-target="#homepage-headings"
                      data-slide-to="0"
                    >
                      OVERVIEW
                    </a>
                  </li>
                  <li className="nav-item d-none d-md-flex" role="presentation">
                    <a
                      className="nav-link"
                      id="podcast-tab"
                      data-toggle="tab"
                      href="#podcast"
                      role="tab"
                      aria-controls="podcast"
                      aria-selected="false"
                      data-target="#homepage-headings"
                      data-slide-to="1"
                    >
                      RELATED ARTISTS
                    </a>
                  </li>
                  <li className="nav-item d-none d-md-flex" role="presentation">
                    <a
                      className="nav-link"
                      id="moods-and-genres-tab"
                      data-toggle="tab"
                      href="#moods-and-genres"
                      role="tab"
                      aria-controls="moods-and-genres"
                      aria-selected="false"
                      data-target="#homepage-headings"
                      data-slide-to="2"
                    >
                      ABOUT
                    </a>
                  </li>

                  <button
                    className="dropdown-toggle d-md-none"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      background: "transparent",
                      fontSize: "10px",
                      border: "none",
                      color: "whitesmoke",
                      fontWeight: "500",
                      letterSpacing: "0.1em",
                      marginBottom: "22px",
                      marginLeft: "5px",
                    }}
                  >
                    MORE
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      OVERVIEW
                    </a>
                    <a className="dropdown-item" href="#">
                      RELATED ARTIST
                    </a>
                    <a className="dropdown-item" href="#">
                      ABOUT
                    </a>
                  </div>
                </ul>
              </div>

              <div
                className="container"
                style={{
                  display: "block",
                  position: "relative",
                  marginBottom: "10em",
                }}
              >
                <h1>Albums</h1>
                <div className="row no-gutters">
                  {this.state.loading ? (
                    <>
                      <Spinner
                        animation="grow"
                        variant="light"
                        style={{
                          margin: "0 auto",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      />
                    </>
                  ) : (
                    <>
                    {
                      this.state.albums.data && this.state.albums.data.map((album, key) => {
                        // let index = this.albumIndex(album.album.title);
                        let index = this.state.albums.data.findIndex(track => track.album.title === album.album.title)
                        //console.log("inside render:::", album.album.title, ":::index:::", index, ":::key:::", key);
                        if(index === key){
                          return(<>
                            <Link to={`/albumPage/${album.album.id}`}>
                            <SingleSong
                              image={album.album.cover}
                              title={album.album.title}
                            />
                            </Link>
                          {console.log("-------------Album-----------", album.album.title)}
                          </>);
                        }
                      })
                    }
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Player />
      </>
    );
  }
}

export default withRouter(ArtistPage);
