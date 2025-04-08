import React from 'react'
import { Link } from 'react-router-dom';

import key from '../../assets/key.png';
import cat from '../../assets/cat.png';

import '../Menu/style.css'

function Menu(props) {
  return (
    <div className='menu'>

      <div className='menu-links'>
        <Link to={"/"}>Home</Link>
        <Link to={"/summon"}>Summon</Link>
      </div>

      <div className='menu-pontos'>

        <div>
          <img src={cat} alt="" />
          <p>{props.cat}</p>
        </div>

        <div>
          <img src={key} alt="" />
          <p>{props.chave}</p>

        </div>
      </div>

    </div>
  )
}

export default Menu