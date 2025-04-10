import React from 'react';
import '../../styles/style.css';
import zoro from '../../../../assets/zoro.png';
import zeroTwo from '../../../../assets/zeroTwo.png';

function Clickers(props) {
  return (
    <>
      {/* Zero Two */}
      <div className="container-estilo">
        <h2 style={{ color: "#0d6efd" }}>Clicker 02</h2>
        <img src={zeroTwo} alt="Clicker Zero Two" />
        {props.compras.zeroTwo ? (
          <>
            <p style={{ color: "yellow" }}>(Comprado)</p>
            <button className="btn-comprar" onClick={() => props.equiparClicker('zeroTwo')}>Equipar</button>
            <button className="btn-comprar" disabled style={{ backgroundColor: "gray" }}>Comprar</button>
          </>
        ) : (
          <button className="btn-comprar" onClick={() => props.comprarClicker('zeroTwo')}>Comprar (50 Catcoins)</button>
        )}
      </div>

      {/* Zoro */}
      <div className="container-estilo">
        <h2 style={{ color: "#0d6efd" }}>Clicker Zoro</h2>
        <img src={zoro} alt="Clicker Zoro" />
        {props.compras.zoro ? (
          <>
            <p style={{ color: "yellow" }}>(Comprado)</p>
            <button className="btn-comprar" onClick={() => props.equiparClicker('zoro')}>Equipar</button>
            <button className="btn-comprar" disabled style={{ backgroundColor: "gray" }}>Comprar</button>
          </>
        ) : (
          <button className="btn-comprar" onClick={() => props.comprarClicker('zoro')}>Comprar (50 Catcoins)</button>
        )}
      </div>

    </>
  );
}

export default Clickers;
