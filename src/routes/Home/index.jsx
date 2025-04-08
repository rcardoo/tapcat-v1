import React, { useState } from 'react'
import { useEffect } from 'react'

import Menu from '../../components/Menu/Menu'

import cat from '../../assets/cat.png'
import '../Home/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Alerta from '../../components/Alerta/Alerta'

function Home() {
  const [contadorCat, setContadorCat] = useState(() => {
    const salvo = localStorage.getItem('qtd-cat');
    return salvo ? JSON.parse(salvo) : 0
  })

  const [contadorChave, setContadorChave] = useState(() => {
    const salvo = localStorage.getItem('qtd-chave');
    return salvo ? JSON.parse(salvo) : 0
  })

  const [alerta, setAlerta] = useState(false)

  useEffect(() => {
    localStorage.setItem('qtd-cat', JSON.parse(contadorCat));
  }, [contadorCat]);

  useEffect(() => {
    localStorage.setItem('qtd-chave', JSON.parse(contadorChave));
  }, [contadorChave]);

  const contadorClick = () => {
    const encontrarChave = Math.floor(Math.random() * 50) + 1;

    setContadorCat((prev) => prev + 1);
    if (encontrarChave == 2) {
      setContadorChave((prev) => prev + 1)
      setAlerta(true)
    }
  }


  return (
    <div className='page-home'>

      <Menu cat={contadorCat} chave={contadorChave} />

      <div className='container-home'>

        {alerta && <Alerta alerta={setAlerta}
          textoAlerta="Que legal! Você encontrou uma chave" />}

        <div className='btn-catTap'>
          <button
            onClick={contadorClick}
            style={{
              borderRadius: 100,
              border: 0,
              display: 'flex',
              alignItems: 'center'
            }}>
            <img src={cat} alt="catTap" />
          </button>
        </div>

      </div>
    </div >
  )
}

export default Home