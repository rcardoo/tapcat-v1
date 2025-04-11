import React from 'react';
import '../../styles/style.css';
import zoro from '../../../../assets/zoro.png';
import zeroTwo from '../../../../assets/zeroTwo.png';
import esdeath from '../../../../assets/imgsLoja/esdeath.png';
import king from '../../../../assets/imgsLoja/king-nanatsu.png';


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

      {/* Esdeath */}
      <div className="container-estilo">
        <h2 style={{ color: "#0d6efd" }}>Clicker Esdeath</h2>
        <img src={esdeath} alt="Clicker Esdeath" />
        {props.compras.esdeath ? (
          <>
            <p style={{ color: "yellow" }}>(Comprado)</p>
            <button className="btn-comprar" onClick={() => props.equiparClicker('esdeath')}>Equipar</button>
            <button className="btn-comprar" disabled style={{ backgroundColor: "gray" }}>Comprar</button>
          </>
        ) : (
          <button className="btn-comprar" onClick={() => props.comprarClicker('esdeath')}>Comprar (50 Catcoins)</button>
        )}
      </div>

      {/* king */}
      <div className="container-estilo">
        <h2 style={{ color: "#0d6efd" }}>Clicker King</h2>
        <img src={king} alt="Clicker King" />
        {props.compras.king ? (
          <>
            <p style={{ color: "yellow" }}>(Comprado)</p>
            <button className="btn-comprar" onClick={() => props.equiparClicker('king')}>Equipar</button>
            <button className="btn-comprar" disabled style={{ backgroundColor: "gray" }}>Comprar</button>
          </>
        ) : (
          <button className="btn-comprar" onClick={() => props.comprarClicker('king')}>Comprar (50 Catcoins)</button>
        )}
      </div>

    </>
  );
}

export default Clickers;
