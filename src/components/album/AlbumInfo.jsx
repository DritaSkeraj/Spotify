import React, { Component } from "react";
import "../../styles/albums.css";
import { Spinner, Row, Col } from "react-bootstrap";
import { ColorExtractor } from "react-color-extractor";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import {Link} from 'react-router-dom';

class AlbumInfo extends Component {
  state = {
    album: "",
    loading: 'true',
    colors: []
  };

  componentDidMount = () =>{
    this.fetchAlbum(this.props.albumId);
    console.log('header mounted')
  }

  fetchAlbum = (id) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + id, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a44588e47dmsh9b184d3ebdf2d08p1faa3djsn2e64ecb46487",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    },this.setState({ loading: true })
    ).then((response) => response.json())
    .then(fetchedAlbum => this.setState({album: fetchedAlbum, loading: false}))
  };

  toMinutes = (d) => {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    return " " + hDisplay + mDisplay;
    }


    getColors = (colors) =>
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));


  render() {

    console.log(this.state.album)
    return (
      <>

      <ColorExtractor getColors={this.getColors}>
        <img src={this.state.album.cover_big} style={{display: 'none' }} />
      </ColorExtractor>
      {console.log("COLORS:::::::", this.state.colors)}

      {this.state.loading ? (
        <div>
          <Spinner animation="grow" variant="light" className="mt-3 albums-spinner"/>
        </div>
      ) : (
      <div className="album row bootstrapOverwrite" style={{backgroundColor: this.state.colors[3], paddingLeft: '40px'}}>
      <Row>
        <Col md={6}>
        <div>
          <img
            className="album-cover img-fluid"
            src={this.state.album.cover_big}
            alt={this.state.album.title}
          />
        </div>
        </Col>
        <Col md={6}>
        <div className="album-details mt-3">
          <h4 className="mt-2">albums</h4>
          <h2>{this.state.album.title}</h2>
          <h5>({this.state.album.label})</h5>
          <div className="last-line mt-2 mb-2" >
            <img
              src={this.state.album.artist.picture_small}
              alt="artist"
              className="group-img mr-2"
            />
            <h6>
              <a className="group-name">
              <Link to={`/artistPage/${this.state.album.artist.name}`}>
                {this.state.album.artist.name}
                </Link>
              </a>
            </h6>
            <p className="album-length">{this.state.album.release_date.slice(0, 4)} •  
            {this.state.album.tracks.data.length} songs, 
            {this.toMinutes(this.state.album.duration)} </p>
          </div>
        </div>
        </Col>
        </Row>
        <hr/>
      </div>
      )}
      </>
    );
  }
}
export default AlbumInfo;