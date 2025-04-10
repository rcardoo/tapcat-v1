import React from 'react'
import '../../styles/style.css'
import key from '../../../../assets/key.png'
import cat from '../../../../assets/cat.png'

function Chaves(props) {
  return (
    <>
      {/* Chaves */}
      <div className="container-estilo">
        <h2>Chaves</h2>
        <img src={key} alt="Chave" />
        <div className="container-loja-chaves-card-texto">
          <img src={props.catcoin} alt="Catcoin" />
          <p>10 Catcoins</p>
        </div>
        <button className="btn-comprar" onClick={props.comprarChave}>Comprar</button>
      </div>

      {/* Cat (grátis e padrão) */}
      <div className="container-estilo">
        <h2>Cat</h2>
        <img src={cat} alt="Clicker Cat" />
        <button className="btn-comprar" onClick={props.equiparClicker}>Equipar</button>
      </div>
    </>
  )
}

export default Chaves