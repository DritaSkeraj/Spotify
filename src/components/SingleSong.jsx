import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/styles.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faPlay } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';

const mapStateToProps = (state) => state;

const mapDispachToProps = (dispach) => ({
  play: (song) => 
    dispach({
      type: "PLAY",
      payload: song,
    })
})

class SingleSong extends React.Component{

  handlePlay = (song) => {
    this.props.play(song);
  }

  render(){
  return (
    <>
      <div>
        <Col>
          <div className="trending card p-0 col-12 col-md-3 col-lg-2 mr-4 ml-4 mt-5 mb-5" style={{height: '150px'}}>
            <img
              className="card-img-top"
              src={this.props.image}
              alt="spotify_playlist_1"
            />

            <span className="overlay-icons" style={{ margin: "0 auto" }}>
              <FontAwesomeIcon icon={faHeart} className="heart-outline mr-3" />
              <FontAwesomeIcon icon={faPlay} className="play mr-3" 
              onClick={() => this.handlePlay(this.props.song)}/>
              <FontAwesomeIcon icon={faEllipsisH} className="mr-3" />
            </span>
            <div>
              <h6 style={{ position: "relative", top: "1rem" }}>
                {this.props.title}
              </h6>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
  }
};

export default connect(mapStateToProps, mapDispachToProps)(SingleSong);
