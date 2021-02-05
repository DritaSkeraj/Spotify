import React, { Component } from "react";
import AlbumHeader from "./AlbumHeader";
import AlbumInfo from "./AlbumInfo";
import AlbumPlaylist from "./AlbumPlaylist";
import Player from "../Player";
import Menu from "./Menu.jsx";
import { Row, Col } from "react-bootstrap";
import '../../styles/styles.css';
import {withRouter} from 'react-router-dom';

class AlbumPage extends Component {

  render() {
            
    return (
      <div>
          <Menu />
          <div className='mainframe' >
            <div className='main-content' >
              <AlbumHeader albumId={this.props.match.params.album}/>
              <AlbumInfo albumId={this.props.match.params.album}/>
              <AlbumPlaylist albumId={this.props.match.params.album}/>
            </div>
          </div>
          <Player />
      </div>
    );
  }
}

export default withRouter(AlbumPage);