import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchCategory from './SearchCategory';
import Menu from '../album/Menu'
import Player from '../Player'
import '../../styles/search.css'
import { Row } from 'react-bootstrap'
import podcastImg from '../../searchImgs/podcasts.jpeg'
import madeForYou from '../../searchImgs/madeForYou.jpeg'
import charts from '../../searchImgs/charts.jpeg'
import wraped from '../../searchImgs/2020wraped.jpg'
import atHome from '../../searchImgs/atHome.png'
import concerts from '../../searchImgs/concerts.jpeg'
import decades from '../../searchImgs/decades.jpeg'
import discover from '../../searchImgs/discover.jpeg'
import jazz from '../../searchImgs/jazz.jpeg'
import metal from '../../searchImgs/metal.jpeg'
import mood from '../../searchImgs/mood.jpeg'
import newReleases from '../../searchImgs/newReleases.jpeg'
import rock from '../../searchImgs/rock.jpeg'

class SearchPage extends Component {
    render() {
        return (
            <div>
            <Menu />
            <div className='search-mainframe'>
              <div className='search-main-content'>
               <SearchHeader/>
               <div className="container">
                <Row>
                    <h4>Browse All</h4>
                </Row>
                <Row>
                <SearchCategory img={podcastImg} title="Podcasts"/>
                <SearchCategory img={madeForYou} title="Made For You"/>
                <SearchCategory img={wraped} title="2020 Wraped Up"/>
                <SearchCategory img={atHome} title="At Home"/>
                <SearchCategory img={rock} title="Rock"/>
                <SearchCategory img={metal} title="Metal"/>
                <SearchCategory img={jazz} title="Jazz"/>
                <SearchCategory img={concerts} title="Concerts"/>
                <SearchCategory img={decades} title="Decades"/>
                <SearchCategory img={discover} title="Discover"/>
                <SearchCategory img={mood} title="Mood"/>
                <SearchCategory img={newReleases} title="New Releases"/>
                </Row>
               </div>
              </div>
            </div>
            <Player />
            </div>
        );
    }
}

export default SearchPage;