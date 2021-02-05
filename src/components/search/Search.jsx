import React, { Component } from "react";
import ReactDOM from "react-dom";
import Downshift from "downshift";
import "../../styles/search.css";
import { BsMusicNote } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      searchedArtist: "",
    };

    this.fetchArtists = this.fetchArtists.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  async inputOnChange(event) {
    let search = "";
    if (!event.target.value) {
      return;
    } else {
      await this.fetchArtists(event.target.value);
      search += event.target.value;
      this.setState({ searchedArtist: search });
    }
  }

  downshiftOnChange(selectedUser) {
    // alert(`you have selected ${selectedUser.name} ${selectedUser.surname}`);
  }

  componentDidMount = () => {
    this.fetchArtists(this.state.searchedArtist);
  };

  //   fetchMovies(movie) {
  //     const moviesURL = `https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${movie}`;
  //     axios.get(moviesURL).then(response => {
  //       this.setState({ movies: response.data.results });
  //     });
  //   }

  fetchArtists = async (artist) => {
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist,
        {
          headers: {
            "x-rapidapi-key":
              "a44588e47dmsh9b184d3ebdf2d08p1faa3djsn2e64ecb46487",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResponse = await response.json();
      // console.log('parsedRes::::::::', parsedResponse);
      //   profiles.push(parsedResponse);
      this.setState({ artists: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Downshift
        onChange={this.downshiftOnChange}
        itemToString={(item) => (item ? item.id : "")}
      >
        {({
          selectedItem,
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen,
          inputValue,
          getLabelProps,
        }) => (
          <div>
            <br />
            <input
              type="text"
              className="searchInput"
              {...getInputProps({
                placeholder: "Search songs",
                onChange: this.inputOnChange,
              })}
            />
            {isOpen ? (
              <div>
                {this.state.artists.data &&
                  this.state.artists.data.slice(0, 5).map((item, index) => (
                    <div
                      style={{ background: "red" }}
                      {...getItemProps({ key: index, index, item })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: selectedItem === item ? "bold" : "normal",
                      }}
                    >
                      {item && (
                        <Row className="pr-2 pl-2">
                          <Link to={`/albumPage/${item.album.id}`}>
                            <p
                              style={{
                                color: "black",
                                padding: "5px 10px",
                                marginTop: "0px",
                                marginBottom: "0px",
                              }}
                            >
                              <BsMusicNote
                                style={{
                                  marginLeft: "10px",
                                  marginRight: "5px",
                                }}
                              />
                              {item.artist.name} - {item.title}
                            </p>
                          </Link>
                        </Row>
                      )}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

export default Search;
