import React from 'react'
import '../Descricao/style.css'

function Descricao(props) {
  return (
    <div className='carta-descricao'>

      <div className='carta-descricao-nomes'>
        <p className='nome-personagem'>{props.nPersonagem || '...'}</p>
        <p className='nome-anime'>{props.nAnime || '...'}</p>
      </div>

      <div className='carta-descricao-fav'>
        <img
          src={props.estrela} alt=""
        />
        <p>{props.fav || '...'}</p>
      </div>

    </div>
  )
}

export default Descricao