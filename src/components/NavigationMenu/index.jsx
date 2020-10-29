import React from 'react'

import { AiFillHome, AiFillFire } from 'react-icons/ai'
import { RiVideoLine } from 'react-icons/ri'
import { MdVideoLibrary, MdHistory, MdOndemandVideo } from 'react-icons/md'
import { FiClock } from 'react-icons/fi'

import './styles.scss'

const NavigationMenu = () => {
    return (
        <aside>
            <section className="main-sections">
                <div className="main-sections-item">
                    <AiFillHome size={20} />
                    <span>
                        Início
                    </span>
                </div>
                <div className="main-sections-item">
                    <AiFillFire size={20} />
                    <span>
                        Em alta
                    </span>
                </div>
                <div className="main-sections-item">
                    <MdOndemandVideo size={20} />
                    <span>
                        Inscrições
                    </span>
                </div>
            </section>

            <section className="related-sections">
                <div className="related-sections-item">
                    <MdVideoLibrary size={20} />
                    <span>
                        Biblioteca
                    </span>
                </div>
                <div className="related-sections-item">
                    <MdHistory size={20} />
                    <span>
                        Histórico
                    </span>
                </div>
                <div className="related-sections-item">
                    <RiVideoLine size={20} />
                    <span>
                        Seus vídeos
                    </span>
                </div>
                <div className="related-sections-item">
                    <FiClock size={20} />
                    <span>
                        Assistir mais tarde
                    </span>
                </div>
            </section>
        </aside>
    )
}

export default NavigationMenu