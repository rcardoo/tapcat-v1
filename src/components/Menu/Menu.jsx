import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import key from '../../assets/key.png';
import cat from '../../assets/cat.png';
import catcoin from '../../assets/catcoin.png';
import '../Menu/style.css'

function Menu(props) {
  return (
    <div className='teste'>
      <ul className="nav justify-content-center">

        <div className="menu-links">
          <li class="nav-item">
            <Link
              class="nav-link"
              to={"/"}>
              <p>Home</p>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link"
              to={"/summon"}>
              <p>Summon</p>
            </Link>
          </li>
        </div>

        <div className="menu-pontos">
          <li className="nav-item cat-menu-pontos">
            <img src={cat} alt="" />
            <p>{props.cat}</p>
          </li>
          <li className="nav-item chave-menu-pontos">
            <img src={key} alt="" />
            <p>{props.chave}</p>
          </li>
          <li className="nav-item chave-menu-pontos">
            <img src={catcoin} alt="" />
            <p>{props.coin}</p>
          </li>
        </div>
      </ul>

    </div>
  )
}

export default Menu