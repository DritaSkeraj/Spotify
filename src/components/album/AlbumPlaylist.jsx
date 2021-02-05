import React, { Component } from "react";
import "../../styles/albums.css";
import { BsFillPlayFill, BsHeart, BsThreeDots, BsClock } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { Spinner, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { ColorExtractor } from "react-color-extractor";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToPlayList: (payload) =>
    dispatch({ type: "ADD_SONG_TO_PLAYLIST", payload }),

  play: (song) =>
    dispatch({
      type: "PLAY",
      payload: song,
    }),
});

class AlbumPlaylist extends Component {
  state = {
    album: "",
    loading: "true",
    colors: [],
    show: false,
    selectedPlaylist: null,
    selectedSong: "",
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleAddToPlaylist = (id) => {
    if (this.props.playlists.length === 0) {
      this.props.history.push("/playList");
    } else {
      this.handleShow();
      this.setState({ selectedSong: id });
    }
  };

  handlePlay = (song) => {
    this.props.play(song);
  };

  handlePlaylistSelect = (e) => {
    console.log(e.target.value);
    this.setState({ selectedPlaylist: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: this.state.selectedPlaylist,
      song: this.state.selectedSong,
    };
    this.props.addToPlayList(payload);
  };

  componentDidMount = () => {
    this.fetchAlbum(this.props.albumId);
    if (this.props.playlists > 0) {
      this.setState({ selectedPlaylist: this.props.playlists[0].name });
    }
  };

  fetchAlbum = (id) => {
    fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/album/" + id,
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
        this.setState({ album: fetchedAlbum, loading: false })
      );
  };

  toMinutes = (d) => {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);

    let hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return " " + hDisplay + mDisplay + sDisplay;
  };

  playlist = {
    background: `linear-gradient(
        0deg,
        rgba(18, 18, 18, 1) 0%,
        rgba(18, 18, 18, 0.9752275910364145) 36%,
        rgba(18, 18, 18, 0.9192051820728291) 84%,
        ${this.state.colors[3]} 100%
      )`,
    padding: "20px 40px",
  };

  getColors = (colors) => {
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));
  };

  render() {
    return (
      <>
        <ColorExtractor getColors={this.getColors}>
          <img src={this.state.album.cover_big} style={{ display: "none" }} />
        </ColorExtractor>
        {console.log("PLAYLIST COLORS:::::::", this.state.colors)}

        <div
          style={{
            background: `linear-gradient(
          0deg,
          rgba(18, 18, 18, 1) 0%,
          rgba(18, 18, 18, 0.9752275910364145) 36%,
          rgba(18, 18, 18, 0.9192051820728291) 84%,
          ${this.state.colors[3]} 100%
        )`,
            padding: "20px 40px",
          }}
        >
          <div className="playlist-btns mb-3">
            <AiFillPlayCircle className="play_btn" />
            <BsHeart className="heart-dots" />
            <BsThreeDots className="heart-dots" />
          </div>
          <div className="playlist-table">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col th-sm">
                    <span># </span>
                  </th>
                  <th scope="col th-lg" style={{ paddingLeft: "50px" }}>
                    Track Title
                  </th>
                  <th scope="col th-sm">Rank</th>
                  <th scope="col th-sm">
                    <BsClock />
                  </th>
                  {/*<div
                 // style={{ borderBottom: "1px solid #b3b3b3", width: "90%" }}
                ></div>*/}
                </tr>
              </thead>

              <tbody>
                {this.state.loading ? (
                  <Spinner
                    animation="grow"
                    variant="light"
                    className="mt-3 albums-spinner"
                  />
                ) : (
                  this.state.album.tracks.data.map((track, key) => (
                    <tr
                      onclick="printInnerText(this)"
                      onClick={() =>
                        this.handlePlay({
                          ...track,
                          ...this.state.album,
                          ...this.state.album.artist,
                        })
                      }
                    >
                      <th
                        scope="row"
                        style={{
                          verticalAlign: "middle",
                          minWidth: "30px",
                          maxWidth: "30px",
                        }}
                      >
                        <span
                          className="track-num"
                          style={{ width: "30px !important" }}
                        >
                          {key + 1}{" "}
                        </span>
                        <BsFillPlayFill
                          onclick="printInnerText()"
                          className="track-play play-track-btn"
                        />
                      </th>
                      <td>
                        <ul>
                          <li className="song">{track.title}</li>
                          <li
                            className="group"
                            style={{ verticalAlign: "middle" }}
                          >
                            {track.artist.name}
                          </li>
                        </ul>
                      </td>
                      <td>
                        <Button
                          onClick={() => this.handleAddToPlaylist(track.id)}
                        >
                          Add To Playlist
                        </Button>
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <p className="group">{track.rank}</p>
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <img
                          src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                          className="track-heart"
                        />
                        <p className="group">
                          {this.toMinutes(track.duration)}
                        </p>
                        <img
                          src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                          className="track-dots"
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div style={{ position: "absolute" }}>
              <Modal
                centered
                show={this.state.show}
                onHide={() => this.handleClose()}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add Playlist</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                  <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Select Playlist</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(e) => this.handlePlaylistSelect(e)}
                      >
                        {this.props.playlists.length > 0 &&
                          this.props.playlists.map((playlist) => (
                            <option>{playlist.name}</option>
                          ))}
                      </Form.Control>
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => this.handleClose()}
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => this.handleClose()}
                    >
                      Add to playlist
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal>
            </div>
          </div>
          <p className="playlist-footer">
            &copy 2018 Queen Productions Ltd, under exclusive licence to
            Universal International Music BV
            <br />℗ A Virgin Records Release; This Compilation ℗ 2018 Queen
            Productions Ltd, under exclusive licence to Universal International
            Music BV
          </p>
        </div>
      </>
    );
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AlbumPlaylist)
);
