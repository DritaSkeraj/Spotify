import React, { Component } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { BsClock, BsFillPlayFill } from "react-icons/bs";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromPlaylist: (payload) =>
    dispatch({ type: "REMOVE_SONG_FROM_PLAYLIST", payload }),
});

class PlayListModal extends Component {
  state = { songs: [], loading: true };

  //   componentDidMount() {
  //     this.fetchSongs();
  //   }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPlaylist !== prevProps.selectedPlaylist) {
      if (this.props.selectedPlaylist) {
        this.fetchSongs();
      }
    }
    if (this.props.playlists !== prevProps.playlists) {
      if (this.props.selectedPlaylist) {
        this.fetchSongs();
      }
    }
  }

  fetchSongs = () => {
    this.setState({ songs: [] });
    let playlist = this.props.playlists.find(
      (playlist) => playlist.name === this.props.selectedPlaylist.name
    );
    if (playlist !== undefined) {
      playlist.songs.forEach(async (song) => {
        try {
          const resp = await fetch(
            `https://deezerdevs-deezer.p.rapidapi.com/track/${song}`,
            {
              method: "GET",
              headers: {
                "x-rapidapi-key":
                  "db388dbec5mshc59db4d245728fep1c2998jsna21051d70dc4",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              },
            }
          );
          if (resp.ok) {
            let data = await resp.json();
            this.setState({ songs: [...this.state.songs.concat(data)] });
          } else {
            let error = resp;
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      });
      this.setState({ loading: false });
    }
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

  handleRemove = (id) => {
    console.log(id);
    let payload = {
      name: this.props.selectedPlaylist.name,
      song: id,
    };
    this.props.removeFromPlaylist(payload);
  };

  render() {
    return (
      <div>
        {/* SHOW PLAYLIST MODAL */}
        {this.props.selectedPlaylist && (
          <Modal centered show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
              <Modal.Title>
                {this.props.selectedPlaylist.name} Playlist
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                    this.state.songs.map((track, key) => (
                      <tr onclick="printInnerText(this)">
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
                        <td>
                          <Button onClick={() => this.handleRemove(track.id)}>
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayListModal);
