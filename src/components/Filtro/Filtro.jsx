import React from 'react'

function Filtro(props) {
  return (
    <div>
      <div className='inventario-menu'>

        <div className='inventario-menu-btns'>
          <button id='inventario-menu-btn-1'>Lendário</button>
          <button id='inventario-menu-btn-2'>Épico</button>
          <button id='inventario-menu-btn-3'>Raro</button>
          <button id='inventario-menu-btn-4'>Comum</button>
        </div>

        <div className='inventario-menu-quantidade'>
          <img style={{ width: '30px', rotate: '-10deg' }} src={props.cartavirada} alt="" />
          <p>5</p>
        </div>

      </div>
    </div>
  )
}

export default Filtro