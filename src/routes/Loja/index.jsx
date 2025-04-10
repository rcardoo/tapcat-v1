import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu/Menu';
import catcoin from '../../assets/catcoin.png';
import key from '../../assets/key.png';
import zeroTwo from '../../assets/zeroTwo.png';
import cat from '../../assets/cat.png';
import zoro from '../../assets/zoro.png';
import '../Loja/styles/style.css';
import Chaves from './Components/Chaves/Chaves';
import Clickers from './Components/Clickers/Clickers';

function Loja() {
  const decodeBase64 = (valor) => {
    try {
      return parseInt(atob(valor), 10);
    } catch (e) {
      return 0;
    }
  };

  const encodeBase64 = (valor) => btoa(JSON.stringify(valor));

  const [imagemEquipada, setImagemEquipada] = useState(() => {
    return localStorage.getItem('clickerEquipado') || 'cat';
  });

  const [compras, setCompras] = useState(() => {
    const salvo = localStorage.getItem('clickersComprados');
    return salvo ? JSON.parse(salvo) : { zeroTwo: false, zoro: false };
  });

  const [contadorCat, setContadorCat] = useState(() => {
    const salvo = localStorage.getItem('qtd-cat');
    return salvo ? decodeBase64(salvo) : 0;
  });

  const [contadorChave, setContadorChave] = useState(() => {
    const salvo = localStorage.getItem('qtd-chave');
    return salvo ? decodeBase64(salvo) : 0;
  });

  const [contadorCoin, setContadorCoin] = useState(() => {
    const salvo = localStorage.getItem('qtd-coin');
    return salvo ? decodeBase64(salvo) : 0;
  });

  useEffect(() => {
    localStorage.setItem('qtd-chave', encodeBase64(contadorChave));
  }, [contadorChave]);

  useEffect(() => {
    localStorage.setItem('qtd-coin', encodeBase64(contadorCoin));
  }, [contadorCoin]);

  useEffect(() => {
    localStorage.setItem('clickersComprados', JSON.stringify(compras));
  }, [compras]);

  function comprarChave() {
    if (contadorCoin >= 10) {
      setContadorChave((prev) => prev + 1);
      setContadorCoin((prev) => prev - 10);
    } else {
      alert("Você precisa de pelo menos 10 Catcoins");
    }
  }

  function comprarClicker(nome) {
    if (contadorCoin >= 50) {
      setContadorCoin((prev) => prev - 50);
      setCompras((prev) => ({ ...prev, [nome]: true }));
      alert(`Você comprou um clicker`);
    } else {
      alert("Você precisa de pelo menos 50 Catcoins");
    }
  }

  function equiparClicker(nome) {
    setImagemEquipada(nome);
    localStorage.setItem('clickerEquipado', nome);
    alert(`Clicker equipado: ${nome}!`);
  }

  return (
    <div className="page-loja">
      <Menu cat={contadorCat} chave={contadorChave} coin={contadorCoin} />
      <main className="container-loja">

        <Chaves catcoin={catcoin} comprarChave={comprarChave} equiparClicker={equiparClicker} />
        <Clickers compras={compras} comprarClicker={comprarClicker} equiparClicker={equiparClicker} />
      </main>
    </div>
  );
}

export default Loja;
