import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { connect } from "react-redux";
import {
  faHeart,
  faChalkboard,
  faRandom,
  faStepBackward,
  faPlay,
  faStepForward,
  faRedoAlt,
  faLaptopHouse,
  faListOl,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import imgPlaceholder from "../assets/bohemian-rhapsody.jpg";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFav: (song) =>
    dispatch({
      type: "ADD_SONG_TO_FAV",
      payload: song,
    }),
  removeFromFav: (song) =>
    dispatch({
      type: "REMOVE_SONG_FROM_FAV",
      payload: song,
    }),
});

class Player extends React.Component {
  state = {
    img:
      "https://e-cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/56x56-000000-80-0-0.jpg",
    song: "Bohemian Rhapsody",
    artist: "Queen",
  };
  componentDidUpdate(prevProps) {
    console.log(
      "player props:::::::::::::::::::::prevProps:",
      prevProps.nowPlaying,
      " newProps:",
      this.props.nowPlaying
    );
    if (prevProps.nowPlaying.id !== this.props.nowPlaying.id) {
      this.setState({
        img: this.props.nowPlaying.artist.picture_small
          ? this.props.nowPlaying.artist.picture_small
          : "http://placehold.it/60x60",
        song: "",
        artist: this.props.nowPlaying.artist.name,
      });
    }
    if (prevProps !== this.props)
      this.setState({ playing: this.props.nowPlaying.id }, () =>
        console.log(this.state.playing)
      );
  }
  render() {
    return (
      <>
        <section
          className="player d-flex justify-content-between"
          style={{ width: "100%", position: "fixed" }}
        >
          <div className="player-albumart d-flex align-items-center justify-content-start">
            <div className="nowplaying-albumart mx-3">
              <img
                src={
                  this.props.nowPlaying.cover_small
                    ? this.props.nowPlaying.cover_small
                    : this.state.img
                }
                style={{ width: "64px", height: "64px" }}
              />
            </div>
            <div className="d-none d-sm-flex flex-column text-left mr-4">
              <div className="nowplaying-title">
                {this.props.nowPlaying.title_short
                  ? this.props.nowPlaying.title_short
                  : this.state.song}
              </div>
              <div className="nowplaying-artist">
                {this.props.nowPlaying.name}
              </div>
            </div>
            {this.state.playing &&
              (this.props.fav.data.find(
                (fa) => fa === this.props.nowPlaying.title_short
              ) !== undefined ? (
                <div
                  className="like-icon"
                  onClick={() => {
                    this.props.removeFromFav(this.props.nowPlaying.title_short);
                    this.setState({ [this.props.nowPlaying.id]: false });
                  }}
                >
                  <IoIosHeart className="heart" />
                </div>
              ) : (
                <div
                  className="like-icon"
                  onClick={() => {
                    this.props.addToFav(this.props.nowPlaying.title_short);
                    this.setState({ [this.props.nowPlaying.id]: true });
                  }}
                >
                  <IoIosHeartEmpty className="heart" />
                </div>
              ))}
            <FontAwesomeIcon
              icon={faChalkboard}
              className="d-none d-lg-block"
            />
          </div>

          <div className="d-flex flex-column py-2 my-1 flex-grow-1"></div>
          {/*******************/}
          <div className="d-flex flex-column py-2 my-1 flex-grow-1">
            <div className="player-btn d-flex align-items-center justify-content-center player-controller my-1 py-1">
              <FontAwesomeIcon
                icon={faRandom}
                className="d-none d-md-flex mx-3"
              />
              <FontAwesomeIcon icon={faStepBackward} className="mx-3" />
              <div className="fa-lg">
                <FontAwesomeIcon icon={faPlay} className="mx-3" />
              </div>
              <FontAwesomeIcon icon={faStepForward} className="mx-3" />
              <FontAwesomeIcon
                icon={faRedoAlt}
                className="d-none d-md-flex mx-3"
              />
            </div>
            <div className="d-none d-sm-flex flex-row justify-content-between player-nowplaying position-relative">
              <div className="player-nowplaying-time">18:32</div>
              <div className="player-progress">
                <div id="nowplayingProgress"></div>
              </div>
              <div className="player-totaltime">24:42</div>
            </div>
          </div>
          <div className="player-setting d-none d-sm-flex align-items-center justify-content-end">
            <FontAwesomeIcon
              icon={faListOl}
              className="d-none d-md-flex mx-2"
            />
            <FontAwesomeIcon
              icon={faLaptopHouse}
              className="d-none d-md-flex fa-md mx-2"
            />
            <div className="player-volume">
              <FontAwesomeIcon icon={faVolumeUp} className="mx-2" />
              <FontAwesomeIcon icon={faVolumeMute} className="mx-2" />
              <div id="nowplayingVolume"></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);
