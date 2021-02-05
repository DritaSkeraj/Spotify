import React, { Component } from 'react';
import '../../styles/albums.css';
import '../../styles/search.css';
import { AiOutlineUser, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Nav, NavDropdown, MenuItem } from "react-bootstrap";
import Search from './Search'

class SearchHeader extends Component {
    render() {
        return (
            <>
              
              <div
                className="album-header"
                id="header"
                style={{ backgroundColor: '#040404', marginLeft: '-17px'}}
              >
                <div className="arrow-container">
                  <AiOutlineLeft className="arrow" />
                  <AiOutlineRight className="arrow" />
                </div>

                <div className="search-input-holder">
                    <FiSearch style={{fontSize: '1.5em', marginLeft: '10px', marginRight: '10px', color: '#1F1F1F'}}/>
                    {/*<input type="text" className="searchInput" placeholder="Search for Artists, Songs or Podcasts" />*/}
                    <Search/>
                </div>
      
                <div className="header-btns">
                        
                  <Nav style={{ marginTop: "-0.5em", paddingLeft: '0px', paddingRight: '0px' }}>
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
                          style={{paddingLeft: '10px', paddingRight: '10px'}}
                        >
                          <span className="user-icon">
                            <AiOutlineUser style={{ fontSize: "1.5em" }} />
                          </span>
                          Drita
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

export default SearchHeader;