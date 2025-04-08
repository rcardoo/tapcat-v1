import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import angrycat from '../../assets/angrycat.png'
import '../Alerta/style.css'

function Alerta(props) {

  const fecharAlerta = () => {
    const setAlerta = props.alerta
    setAlerta(false)
  }

  return (
    <div className="alert alert-primary" role="alert">
      <img src={angrycat} alt=""
        style={{
          width: '60px',
          marginRight: '20px'
        }} />

      {props.textoAlerta}

      <button onClick={fecharAlerta} className='button-alerta'>X</button>
    </div>
  )
}

export default Alerta