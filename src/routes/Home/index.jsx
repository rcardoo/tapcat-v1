import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu/Menu';
import Alerta from '../../components/Alerta/Alerta';

import cat from '../../assets/cat.png'
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [alerta, setAlerta] = useState(false)
  const [alertaBonus, setAlertaBonus] = useState(false)

  const [contadorCat, setContadorCat] = useState(() => {
    const salvo = localStorage.getItem('qtd-cat');
    return salvo ? JSON.parse(salvo) : 0
  })

  const [contadorChave, setContadorChave] = useState(() => {
    const salvo = localStorage.getItem('qtd-chave');
    return salvo ? JSON.parse(salvo) : 0
  })

  const [contadorCoin, setContadorCoin] = useState(() => {
    const salvo = localStorage.getItem('qtd-coin');
    return salvo ? JSON.parse(salvo) : 0
  })

  useEffect(() => {
    localStorage.setItem('qtd-cat', JSON.parse(contadorCat));
  }, [contadorCat]);

  useEffect(() => {
    localStorage.setItem('qtd-chave', JSON.parse(contadorChave));
  }, [contadorChave]);

  useEffect(() => {
    if (alertaBonus) {
      const timer = setTimeout(() => {
        setAlertaBonus(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alertaBonus]);

  const contadorClick = () => {
    const encontrarChave = Math.floor(Math.random() * 80) + 1;

    setContadorCat((prev) => prev + 1);
    if (contadorCat == 10000 || contadorCat == 20000) {
      setContadorChave((prev) => prev + 15)
      setAlertaBonus(true)
    }
    if (encontrarChave == 2) {
      setContadorChave((prev) => prev + 1)
      alert("⏰ Apenas evitando que você use métodos indevidos de click, espertinho >_<")
      setAlerta(true)
    }
  }

  return (
    <div className='page-home'>
      {alertaBonus && <Alerta alerta={setAlertaBonus}
        textoAlerta="Você tá no foco! Pega umas chaves de presente 🎁" />}
      {alerta && <Alerta alerta={setAlerta}
        textoAlerta="Que legal! Você encontrou uma chave. Pode gastar ela para conseguir um personagem" />}
      <Menu cat={contadorCat} chave={contadorChave} coin={contadorCoin} />
      <div className='container-home'>
        {/* <p style={{ color: 'yellow' }}>DESENVOLVEDOR</p> */}

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