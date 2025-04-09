import React from 'react'


import angrycat from '../../assets/angrycat.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function Alerta(props) {

  const fecharAlerta = () => {
    const setAlerta = props.alerta
    setAlerta(false)
  }

  return (
    <div className="alert alert-primary" role="alert">
      <img src={angrycat} alt="" />

      {props.textoAlerta}

      <button onClick={fecharAlerta} className='button-alerta'>X</button>
    </div>
  )
}

export default Alerta