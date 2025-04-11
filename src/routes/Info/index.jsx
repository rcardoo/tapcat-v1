import React from 'react'
import { useState } from 'react';
import Menu from '../../components/Menu/Menu'
import infos from '../../assets/infos.png'
import infoPessoas from '../../assets/info-pessoas.png'
import infoAviso from '../../assets/info-aviso.png'
import './styles/style.css'

function decodeBase64(str) {
  try {
    return JSON.parse(atob(str));
  } catch (e) {
    return 0;
  }
}

function encodeBase64(value) {
  return btoa(JSON.stringify(value));
}

function Info() {

  const [contadorCat, setContadorCat] = useState(() => {
    const salvo = localStorage.getItem('qtd-cat');
    return salvo ? decodeBase64(salvo) : 0;
  })

  const [contadorChave, setContadorChave] = useState(() => {
    const salvo = localStorage.getItem('qtd-chave');
    return salvo ? decodeBase64(salvo) : 0;
  })

  const [contadorCoin, setContadorCoin] = useState(() => {
    const salvo = localStorage.getItem('qtd-coin');
    return salvo ? decodeBase64(salvo) : 0;
  })
  return (
    <>
      <Menu cat={contadorCat} chave={contadorChave} coin={contadorCoin} />
      <div className='conteiner-info'>
        <div className='conteiner-infos-geral'>
          <div className='infos-aviso'>
            <img src={infos} alt="" />
            <img src={infoAviso} alt="" className='img-aviso' />
          </div>
          <div className='lista-participantes'>
            <img src={infoPessoas} alt="" />
            <ul>
              <li><a href='https://github.com/rcardoo' target='_blank'>Ricardo</a></li>
              <li><a href='https://github.com/ManuTeste'>Tinna</a></li>
              <li><a href='https://github.com/Gabriell56'>Gabriel</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info