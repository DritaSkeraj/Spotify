import React, { Component } from 'react';
import '../../styles/search.css'
import { Col } from 'react-bootstrap';
import { ColorExtractor } from "react-color-extractor";

class SearchCategory extends Component {

    state = {
        colors: []
    }

    getColors = (colors) =>
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));

    render() {
        return (
            <>
            <ColorExtractor getColors={this.getColors}>
                <img src={this.props.img} style={{display: 'none' }} />
            </ColorExtractor>

            <Col xs={12} md={4} lg={3}>
              <div className='cardHolder' style={{background: `${this.state.colors[0]}`,
                background: `linear-gradient(0deg, ${this.state.colors[0]}44 0%, ${this.state.colors[0]} 100%)`}}>
                  <h5>{this.props.title}</h5>
                  <img src={this.props.img} alt={`${this.props.title} image`}/>
              </div>
            </Col>
            </>
        );
    }
}

export default SearchCategory;