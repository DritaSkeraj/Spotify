import React, { Component } from 'react';
import '../styles/styles.css';

class HomeNavigationMenu extends Component{
    render(){
        return(
            <>
            <div>
            <ul
            className="nav nav-tabs justify-content-center"
            id="myTab"
            role="tablist"
            >
            <li className="nav-item" role="presentation">
                <a
                className="nav-link"
                id="trending-tab"
                data-toggle="tab"
                href="#trending"
                role="tab"
                aria-controls="trending"
                aria-selected="true"
                data-target="#homepage-headings"
                data-slide-to="0"
                >TRENDING</a>
            </li>
            <li className="nav-item" role="presentation">
                <a
                className="nav-link"
                id="podcast-tab"
                data-toggle="tab"
                href="#podcast"
                role="tab"
                aria-controls="podcast"
                aria-selected="false"
                data-target="#homepage-headings"
                data-slide-to="1"
                >PODCAST</a>
            </li>
            <li className="nav-item d-none d-md-flex" role="presentation">
                <a
                className="nav-link"
                id="moods-and-genres-tab"
                data-toggle="tab"
                href="#moods-and-genres"
                role="tab"
                aria-controls="moods-and-genres"
                aria-selected="false"
                data-target="#homepage-headings"
                data-slide-to="2"
                >MOODS AND GENRES</a>
            </li>
            <li className="nav-item d-none d-md-flex " role="presentation">
                <a
                className="nav-link"
                id="new-releases-tab"
                data-toggle="tab"
                href="#new-releases"
                role="tab"
                aria-controls="new-releases"
                aria-selected="false"
                data-target="#homepage-headings"
                data-slide-to="2"
                >NEW RELEASES</a>
            </li>
            <li className="nav-item d-none d-md-flex" role="presentation">
                <a
                className="nav-link"
                id="discover-tab"
                data-toggle="tab"
                href="#discover"
                role="tab"
                aria-controls="discover"
                aria-selected="false"
                data-target="#homepage-headings"
                data-slide-to="2"
                >DISCOVER
                </a>
            </li>
            <button className="dropdown-toggle d-md-none" type="button" id="dropdownMenuButton" 
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{
            background: "transparent",
            fontSize: "10px",
            border: "none",
            color: "whitesmoke",
            fontWeight: "500",
            letterSpacing: "0.1em",
            marginBottom: "22px",
            marginLeft: "5px"}}>
            MORE
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">MOODS & GENERES</a>
            <a className="dropdown-item" href="#">NEW RELEASES</a>
            <a className="dropdown-item" href="#">DISCOVER</a>
            </div>
        </ul>
        </div>
            </>
        )
    }
}

export default HomeNavigationMenu;