import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChalkboard, faRandom, faStepBackward, faPlay, faStepForward, faRedoAlt, faLaptopHouse, faListOl, faVolumeUp, faVolumeMute} 
        from '@fortawesome/free-solid-svg-icons'
import '../styles/styles.css';
import imgPlaceholder from '../assets/bohemian-rhapsody.jpg';

const Player = () => {

    return(
        <>
        <section
        className="player d-flex justify-content-between"
        style={{width: '100%', position: 'fixed'}}
        >
        <div
          className="player-albumart d-flex align-items-center justify-content-start"
        >
          <div className="nowplaying-albumart mx-3">
            <img src={imgPlaceholder} style={{width: '64px', height: '64px'}}/>
          </div>
          <div className="d-none d-sm-flex flex-column text-left mr-4">
            <div className="nowplaying-title">Now playing title</div>
            <div className="nowplaying-artist">Now playing artist</div>
          </div>
          <div className="d-none d-lg-flex loved-track mr-3">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <FontAwesomeIcon icon={faChalkboard} className="d-none d-lg-block"/>
        </div>
  
        <div className="d-flex flex-column py-2 my-1 flex-grow-1">
          <div className="player-btn d-flex align-items-center justify-content-center player-controller my-1 py-1">
            <FontAwesomeIcon icon={faRandom} className="d-none d-md-flex mx-3"/>
            <FontAwesomeIcon icon={faStepBackward} className="mx-3"/> 
            <div className="fa-lg">
              <FontAwesomeIcon icon={faPlay} className='mx-3'/>
            </div>
            <FontAwesomeIcon icon={faStepForward} className='mx-3'/>
            <FontAwesomeIcon icon={faRedoAlt} className='d-none d-md-flex mx-3'/>
          </div>
          <div className="d-none d-sm-flex flex-row justify-content-between player-nowplaying position-relative">
            <div className="player-nowplaying-time">18:32</div>
            <div className="player-progress">
              <div id="nowplayingProgress"></div>
            </div>
            <div className="player-totaltime">24:42</div>
          </div>
        </div>
        <div className="player-setting d-none d-sm-flex align-items-center justify-content-end">
          <FontAwesomeIcon icon={faListOl} className='d-none d-md-flex mx-2'/>
          <FontAwesomeIcon icon={faLaptopHouse} className='d-none d-md-flex fa-md mx-2'/>
          <div className="player-volume">
            <FontAwesomeIcon icon={faVolumeUp} className='mx-2'/>
            <FontAwesomeIcon icon={faVolumeMute} className='mx-2'/>
            <div id="nowplayingVolume"></div>
          </div>
        </div>
      </section>
        </>
    );

}

export default Player;