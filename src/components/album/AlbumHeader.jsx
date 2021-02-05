import React, { Component } from "react";
import "../../styles/albums.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineUser, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { ColorExtractor } from "react-color-extractor";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class AlbumHeader extends Component {
  state = {
    album: "",
    loading: "true",
    colors: [],
  };

  componentDidMount = () => {
    this.fetchAlbum(this.props.albumId);
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

  getColors = (colors) => {
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));
  };

  render() {
    return (
      <>
        <ColorExtractor getColors={this.getColors}>
          <img src={this.state.album.cover_big} style={{ display: "none" }} />
        </ColorExtractor>
        {console.log("header COLORS:::::::", this.state.colors)}

        <div
          className="album-header"
          id="header"
          style={{ backgroundColor: this.state.colors[3] }}
        >
          <div className="arrow-container">
            <AiOutlineLeft className="arrow" />
            <AiOutlineRight className="arrow" />
          </div>

          <div className="header-btns">
            <a href="#">
              <button
                className="upgrade-btn"
                value="upgrade"
                style={{ marginRight: "20px" }}
              >
                UPGRADE
              </button>
            </a>

            <Nav
              style={{
                marginTop: "-0.5em",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            >
              <NavDropdown
                eventkey={1}
                title={
                  <button
                    className="profile-btn dropdown-toggle dropdown"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    <span>
                      {/* <AiOutlineUser style={{ fontSize: "1.5em" }} /> */}
                      {this.props.user.picture && (
                        <img
                          src={this.props.user.picture}
                          alt="profile pic"
                          style={{ height: "1.2rem", borderRadius: "50%" }}
                          className="mr-2"
                        />
                      )}
                    </span>
                    {this.props.user.name || "Login to add fav"}
                    <BsChevronDown className="ml-1 mr-1" />
                  </button>
                }
              >
                <NavDropdown.Item
                  eventkey={1.1}
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  User
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventkey={1.3}
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventkey={1.3}
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </>
    );
  }
}
export default connect(mapStateToProps)(AlbumHeader);
