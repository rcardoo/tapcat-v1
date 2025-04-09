import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu/Menu';
import Alerta from '../../components/Alerta/Alerta';

import cat from '../../assets/cat.png'
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [alerta, setAlerta] = useState(false)

  const [contadorCat, setContadorCat] = useState(() => {
    const salvo = localStorage.getItem('qtd-cat');
    return salvo ? JSON.parse(salvo) : 0
  })

  const [contadorChave, setContadorChave] = useState(() => {
    const salvo = localStorage.getItem('qtd-chave');
    return salvo ? JSON.parse(salvo) : 0
  })

  useEffect(() => {
    localStorage.setItem('qtd-cat', JSON.parse(contadorCat));
  }, [contadorCat]);

  useEffect(() => {
    localStorage.setItem('qtd-chave', JSON.parse(contadorChave));
  }, [contadorChave]);

  const contadorClick = () => {
    const encontrarChave = Math.floor(Math.random() * 10) + 1;

    setContadorCat((prev) => prev + 1);
    if (encontrarChave == 2) {
      setContadorChave((prev) => prev + 1)
      alert("⏰ Apenas evitando que você use métodos indevidos de click, espertinho >_<")
      setAlerta(true)
    }
  }

  return (
    <div className='page-home'>
      {alerta && <Alerta alerta={setAlerta}
        textoAlerta="Que legal! Você encontrou uma chave" />}
      <Menu cat={contadorCat} chave={contadorChave} />
      <div className='container-home'>

        <div className='btn-catTap'>
          <button onClick={contadorClick}
            style={{
              borderRadius: 100,
              border: 0,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#121419',
            }}
          >
            <img src={cat} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home