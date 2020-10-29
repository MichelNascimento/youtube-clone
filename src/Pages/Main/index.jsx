import React from 'react'

import './styles.scss'

import Header from '../../components/Header'
import NavigationMenu from '../../components/NavigationMenu'
import VideoCard from '../../components/VideoCard'

const Main = () => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="content">
                <div className="left-menu">
                    <NavigationMenu />
                </div>
                <div className="cards">
                    <VideoCard />
                </div>
            </div>
        </>
    )
}

export default Main