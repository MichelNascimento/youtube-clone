import React from 'react'

import './styles.scss'

import Header from '../../components/Header'
import NavigationMenu from '../../components/NavigationMenu'
import VideoCard from '../../components/VideoCard'

const Main = () => {

    const data = [
        {
            time: "14:25", 
            title: "Fiz um clone do YouTube com ReactJS e olha no que deu!!",
            name: "Canal do Michel",
            views: "200 mil",
            upload: "Há 1 mês"
        }
    ]

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
                    {
                        data.map(item => (
                            <VideoCard 
                                time={item.time}
                                title={item.title}
                                name={item.name}
                                views={item.views}
                                upload={item.upload}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Main