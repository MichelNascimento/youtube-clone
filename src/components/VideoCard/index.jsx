import React from 'react'

import './styles.scss'

import logo from '../../assets/youtube-logo.png'

const VideoCard = (props) => {
    return (
        <div className="container">
            <div className="video-img">
                <span>{props.time}</span>
            </div>
            <div className="infos">
                <img src={logo} alt="Profile" />
                <div className="main-infos">
                    <h4>
                        {props.title}
                    </h4>
                    <span>{props.name}</span>
                    <span>{props.views} visualizações</span>
                    <span>{props.upload}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoCard