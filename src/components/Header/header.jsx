import React from 'react'

// icons
import { RiVideoAddLine } from 'react-icons/ri'
import { CgMenuGridR, CgProfile } from 'react-icons/cg'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'

import logo from '../../assets/youtube-logo.png'

import './headerStyle.scss'

const Header = () => {
    return (
        <header>
            <div className="youtube-logo">
                <img src={logo} height={30} width={30} alt="YouTube Logo" />
                <span>YouTube</span>
            </div>
            <div className="container-search">
                <input type="text" id="txtSearch" placeholder="Pesquisar" />
                <button id="btnSearch">
                    <AiOutlineSearch size={20} />
                </button>
            </div>
            <div className="container-options">
                <div className="container-options-item">
                    <RiVideoAddLine size={20} />
                </div>
                <div className="container-options-item">
                    <CgMenuGridR size={20} />
                </div>
                <div className="container-options-item">
                    <IoIosNotificationsOutline size={20} />
                </div>
                <div className="container-options-item">
                    <CgProfile size={30} />
                </div>
            </div>
        </header>
    )
}

export default Header;