import React from 'react'

import { AiFillHome, AiFillFire } from 'react-icons/ai'
import { RiVideoLine } from 'react-icons/ri';

import './navigationMenuStyle.scss'

const NavigationMenu = () => {
    return (
        <aside>
            <div className="main-sections">
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
                    <RiVideoLine size={20} />
                    <span>
                        Inscrições
                    </span>
                </div>
            </div>
        </aside>
    )
}

export default NavigationMenu