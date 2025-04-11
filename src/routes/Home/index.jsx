import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu/Menu';
import Alerta from '../../components/Alerta/Alerta';

import king from '../../assets/imgsLoja/king-nanatsu.png';
import esdeath from '../../assets/imgsLoja/esdeath.png';
import zoro from '../../assets/zoro.png';
import zeroTwo from '../../assets/zeroTwo.png';
import cat from '../../assets/cat.png'
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

function Home() {
  const [alerta, setAlerta] = useState(false)
  const [alertaBonus, setAlertaBonus] = useState(false)
  const [catImg, setCatImg] = useState(cat);

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

  useEffect(() => {
    localStorage.setItem('qtd-cat', encodeBase64(contadorCat));
  }, [contadorCat]);

  useEffect(() => {
    localStorage.setItem('qtd-chave', encodeBase64(contadorChave));
  }, [contadorChave]);

  useEffect(() => {
    localStorage.setItem('qtd-coin', encodeBase64(contadorCoin));
  }, [contadorCoin]);

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
    if (contadorCat == 10000 || contadorCat == 20000 || contadorCat == 30000 || contadorCat == 40000 ||
      contadorCat == 50000 || contadorCat == 60000 || contadorCat == 70000 || contadorCat == 80000 ||
      contadorCat == 90000) {
      setContadorChave((prev) => prev + 15)
      setContadorCoin((prev) => prev + 1)
      setAlertaBonus(true)
    }
    if (contadorCat == 100000) {
      setContadorChave((prev) => prev + 100)
      setContadorCoin((prev) => prev + 100)
      setAlertaBonus(true)
    }

    if (encontrarChave === 2) {
      setContadorChave((prev) => prev + 1)
      alert("⏰ Apenas evitando que você use métodos indevidos de click, espertinho >_<")
      setAlerta(true)
    }
  }

  return (
    <div className='page-home'>
      {alertaBonus && <Alerta alerta={setAlertaBonus}
        textoAlerta="Você tá no foco! Pega um presente 🎁" />}
      {alerta && <Alerta alerta={setAlerta}
        textoAlerta="Que legal! Você encontrou uma chave. Pode gastar ela para conseguir um personagem" />}
      <Menu cat={contadorCat} chave={contadorChave} coin={contadorCoin} />
      <div className='container-home'>
        <div className='btn-catTap'>
          <button onClick={contadorClick}
            style={{
              borderRadius: 100,
              border: 0,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
          >
            <img
              src={
                localStorage.getItem('clickerEquipado') === 'zeroTwo' ? zeroTwo :
                  localStorage.getItem('clickerEquipado') === 'zoro' ? zoro :
                    localStorage.getItem('clickerEquipado') === 'esdeath' ? esdeath :
                      localStorage.getItem('clickerEquipado') === 'king' ? king :
                        cat
              }
              className={localStorage.getItem('clickerEquipado') === 'zeroTwo' ? 'clicker-zeroTwo' :
                localStorage.getItem('clickerEquipado') === 'zoro' ? 'clicker-zoro' :
                  localStorage.getItem('clickerEquipado') === 'esdeath' ? 'clicker-esdeath' :
                    localStorage.getItem('clickerEquipado') === 'king' ? 'clicker-king' : 'cat'}
              alt="clicker"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
