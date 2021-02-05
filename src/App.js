import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AsideMenu from "./components/AsideMenu";
import Player from "./components/Player";
import Login from "./components/Login";
import HomeContent from "./components/HomeContent";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AlbumPage from "./components/album/AlbumPage";
import ArtistPage from "./components/artist/ArtistPage";
import SearchPage from "./components/search/SearchPage";

function App() {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={AsideMenu} />
      <Route path="/" exact component={Player} />
      <Route path="/" exact component={HomeContent} />
      <Route path="/albumPage/:album" exact component={AlbumPage} />
      <Route path="/artistPage/:artist" exact component={ArtistPage} />
      <Route path="/search" exact component={SearchPage} />
    </Router>
  );
}

export default App;
