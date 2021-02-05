import { Button, Card, Modal, Form } from "react-bootstrap";
import React, { Component } from "react";
import AsideMenu from "../AsideMenu";
import Player from "../Player";
import { connect } from "react-redux";
import PlayListModal from "./PlayListModal";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addPlaylist: (name) => dispatch({ type: "ADD_PLAYLIST", payload: name }),
  removePlaylist: (name) =>
    dispatch({ type: "REMOVE_PLAYLIST", payload: name }),
  setPlayList: (name) => dispatch({ type: "SET_PLAYLIST", payload: name }),
  unsetPlaylist: () => dispatch({ type: "UNSET_PLAYLIST" }),
});

class PlayList extends Component {
  state = {
    show: false,
    name: "",
    playListModal: false,
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handlePlayListClose = () => {
    this.props.unsetPlaylist();
    this.setState({ playListModal: false });
  };
  handlePlayListShow = (e) => {
    this.props.setPlayList(e.currentTarget.id);
    this.setState({
      playListModal: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlaylist(this.state.name);
  };

  handleOnchange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleRemove = (e) => {
    this.props.removePlaylist(e.currentTarget.id);
  };

  render() {
    return (
      <div>
        <AsideMenu />
        <section className="mainframe">
          <div
            className="main-content"
            style={{ overflowY: "hidden !important" }}
          >
            <h1>Playlists</h1>
            {this.props.playlists.length > 0 &&
              this.props.playlists.map((playlist) => (
                <Card id={playlist.name} style={{ width: "10rem" }}>
                  <Card.Img
                    variant="top"
                    src="http://placehold.it/50x50"
                    onClick={(e) => this.handlePlayListShow(e)}
                  />
                  <Card.Body>
                    <Card.Title>{playlist.name}</Card.Title>
                  </Card.Body>
                  <Button
                    variant="danger"
                    id={playlist.name}
                    onClick={(e) => this.handleRemove(e)}
                  >
                    Delete
                  </Button>
                </Card>
              ))}
            <Button onClick={() => this.handleShow()}>Create Playlist</Button>
            {/* ADD PLAYLIST MODAL */}
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
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Playlist Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      onChange={(e) => this.handleOnchange(e)}
                    />
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
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>

            <PlayListModal
              show={this.state.playListModal}
              onHide={() => this.handlePlayListClose()}
              selectedPlayList={this.state.selectedPlaylist}
            />
          </div>
        </section>
        <Player />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
