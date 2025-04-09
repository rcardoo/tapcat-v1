import React from 'react'
import Menu from '../../components/Menu/Menu';
import '../Summon/styles/style.css'
//  Importação React
import { useState } from 'react'
import { useEffect } from 'react';

// Importação Componentes
import Alerta from '../../components/Alerta/Alerta';
import backcard from '../../assets/backcard.png';

// Importação de estilos
import estrela from '../../assets/estrela.png'

// Outras importações
import axios from 'axios';
import Descricao from '../../components/Descricao/Descricao';
import Filtro from '../../components/Filtro/Filtro';
import { data } from 'react-router-dom';

function Summon() {
  const [salvarCarta, setSalvarCarta] = useState(() => {
    const salvo = localStorage.getItem('cartas');
    return salvo ? JSON.parse(salvo) : [];
  });

  const [contadorCat, setContadorCat] = useState(() => {
    const salvo = localStorage.getItem('qtd-cat');
    return salvo ? JSON.parse(salvo) : 0
  });

  const [contadorChave, setContadorChave] = useState(() => {
    const salvo = localStorage.getItem('qtd-chave');
    return salvo ? JSON.parse(salvo) : 0
  });

  // Estados
  const [favorito, setFavorito] = useState(0)
  const [nomeAnime, setNomeAnime] = useState()
  const [nomePersonagem, setNomePersonagem] = useState()
  const [character, setCharacter] = useState();
  const [alerta, setAlerta] = useState(false)
  const [ativaBtn, setAtivaBtn] = useState(false)
  const [mostrarImagem, setMostrarImagem] = useState(false)

  // Adicionando no Local Storage

  useEffect(() => {
    localStorage.setItem('qtd-cat', JSON.parse(contadorCat));
  }, [contadorCat]);

  useEffect(() => {
    localStorage.setItem('qtd-chave', JSON.parse(contadorChave));
  }, [contadorChave]);

  useEffect(() => {
    localStorage.setItem('cartas', JSON.stringify(salvarCarta));
  }, [salvarCarta]);

  useEffect(() => {
    if (character) {
      setMostrarImagem(true);
      setAtivaBtn(false);
    }
  }, [character]);


  // Função de chamada a API que retorna a carta e suas informações

  const teste = () => {
    if (contadorChave <= 0) {
      setAtivaBtn(true);
      setAlerta(true);
      return;
    }

    setAtivaBtn(true); // desativa temporariamente para evitar múltiplos cliques
    setContadorChave((prev) => prev - 1);

    const idRandom = Math.floor(Math.random() * 1000) + 1;
    const ENDPOINT = `https://api.jikan.moe/v4/characters/${idRandom}/full`;

    axios.get(ENDPOINT)
      .then(response => {
        const data = response.data.data;

        const novaCarta = {
          nome: data.name,
          nome_kanji: data.name_kanji,
          imagem_anime: data.images.jpg.image_url,
          nome_anime: data.anime[0]?.anime?.title || 'Anime desconhecido',
          favorito: data.favorites
        };

        setSalvarCarta((prevCartas) => [...prevCartas, novaCarta]);
        setCharacter(data);
        setFavorito(novaCarta.favorito)
        setNomePersonagem(novaCarta.nome)
        setNomeAnime(novaCarta.nome_anime)
        console.log(character)

      })
      .catch(err => {
        console.error('Erro:', err);
        setAlerta(true);
      })
      .finally(() => {
        // setAlerta(true);
        setAtivaBtn(false);
      });
  };

  function getCartaRaridade(favorito) {
    if (favorito >= 48000) {
      return 'carta-lendaria';
    }

    if (favorito >= 22370) {
      return 'carta-epica';
    }

    if (favorito >= 11246) {
      return 'carta-rara';
    }

    return 'carta-comum';
  }

  return (
    <div className='page-summon'>
      {alerta && <Alerta alerta={setAlerta} textoAlerta="Miau! Você não tem chave" />}
      <Menu className='menu' cat={contadorCat} chave={contadorChave} />
      <div className='container-summon'>
        <div className='container-catch'>
          {/* Renderização da imagem */}
          {mostrarImagem && character ? (
            <>
              <img
                style={{
                  maxWidth: '250px',
                  maxHeight: '388px'
                }}
                className={`carta ${getCartaRaridade(favorito)}`}
                src={character.images.jpg.image_url} alt={character.name}
              />
            </>
          ) : (
            <img
              className='carta'
              src={backcard} alt="carta virada"
            />
          )}

          <Descricao nPersonagem={nomePersonagem} nAnime={nomeAnime} estrela={estrela} fav={favorito} />

          <button className='btn-catch' disabled={ativaBtn} onClick={teste}>Catch</button>
        </div>
        {/* Iventario */}
        <div className='inventario-content'>
          <div className='inventario-cartas'>
            {[...salvarCarta].reverse().map((carta, index) => (
              <img
                key={index}
                src={carta.imagem_anime}
                alt={carta.nome}
                className={`carta-inventario-raridade ${getCartaRaridade(carta.favorito)}`}
              />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summon