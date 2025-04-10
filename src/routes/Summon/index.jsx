import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu/Menu';
import '../Summon/styles/style.css';
import Alerta from '../../components/Alerta/Alerta';
import backcard from '../../assets/backcard.png';
import estrela from '../../assets/estrela.png';

import axios from 'axios';
import Descricao from '../../components/Descricao/Descricao';

function Summon() {
  const [salvarCarta, setSalvarCarta] = useState(() => {
    const salvo = localStorage.getItem('cartas');
    return salvo ? JSON.parse(salvo) : [];
  });

  const [contadorCat, setContadorCat] = useState(() => {
    const salvo = localStorage.getItem('qtd-cat');
    return salvo ? parseInt(atob(salvo)) : 0;
  });

  const [contadorChave, setContadorChave] = useState(() => {
    const salvo = localStorage.getItem('qtd-chave');
    return salvo ? parseInt(atob(salvo)) : 0;
  });

  const [contadorCoin, setContadorCoin] = useState(() => {
    const salvo = localStorage.getItem('qtd-coin');
    return salvo ? parseInt(atob(salvo)) : 0;
  });

  const [favorito, setFavorito] = useState(0);
  const [nomeAnime, setNomeAnime] = useState();
  const [nomePersonagem, setNomePersonagem] = useState();
  const [character, setCharacter] = useState();
  const [alerta, setAlerta] = useState(false);
  const [alertaCoin, setAlertaCoin] = useState(false);
  const [ativaBtn, setAtivaBtn] = useState(false);
  const [mostrarImagem, setMostrarImagem] = useState(false);
  const [capturando, setCapturando] = useState(false);

  // Salvando dados codificados em Base64
  useEffect(() => {
    localStorage.setItem('qtd-cat', btoa(contadorCat.toString()));
  }, [contadorCat]);

  useEffect(() => {
    localStorage.setItem('qtd-chave', btoa(contadorChave.toString()));
  }, [contadorChave]);

  useEffect(() => {
    localStorage.setItem('qtd-coin', btoa(contadorCoin.toString()));
  }, [contadorCoin]);

  useEffect(() => {
    localStorage.setItem('cartas', JSON.stringify(salvarCarta));
  }, [salvarCarta]);

  useEffect(() => {
    if (character) {
      setCapturando(true);
      setAtivaBtn(true);
      setTimeout(() => {
        setMostrarImagem(true);
        setCapturando(false);
        setAtivaBtn(false);
      }, 200);
    }
  }, [character]);

  const teste = () => {
    if (contadorChave <= 0) {
      setAtivaBtn(true);
      setAlerta(true);
      return;
    }

    setAtivaBtn(true);
    setContadorChave((prev) => prev - 1);

    const idRandom = Math.floor(Math.random() * 1000) + 1;
    const ENDPOINT = `https://api.jikan.moe/v4/characters/${idRandom}/full`;

    axios.get(ENDPOINT)
      .then(response => {
        const data = response.data.data;

        const novaCarta = {
          id_personagem: data.mal_id,
          nome: data.name,
          nome_kanji: data.name_kanji,
          imagem_anime: data.images.jpg.image_url,
          nome_anime: data.anime[0]?.anime?.title || 'Anime desconhecido',
          favorito: data.favorites,
          url: data.url
        };

        setSalvarCarta((prevCartas) => {
          const jaExiste = prevCartas.some(carta => carta.nome === novaCarta.nome);

          if (jaExiste) {
            const bonus = novaCarta.favorito >= 48000 ? 5 : 1;
            setContadorCoin((prev) => prev + bonus);
            setAlertaCoin(true);
            return prevCartas;
          }

          return [...prevCartas, novaCarta];
        });

        setCharacter(data);
        setFavorito(novaCarta.favorito);
        setNomePersonagem(novaCarta.nome);
        setNomeAnime(novaCarta.nome_anime);
      })
      .catch(err => {
        console.error('Erro:', err);
        setAlerta(true);
      })
      .finally(() => {
        setAtivaBtn(false);
      });
  };

  function getCartaRaridade(favorito) {
    if (favorito >= 48000) return 'carta-lendaria';
    if (favorito >= 22370) return 'carta-epica';
    if (favorito >= 11246) return 'carta-rara';
    if (favorito >= 7630) return 'carta-incomun';
    return 'carta-comum';
  }

  return (
    <div className='page-summon'>
      {alertaCoin && (
        <Alerta
          alerta={setAlertaCoin}
          textoAlerta="Ops! Parece que você já tem uma carta dessa, pega umas moedinhas e engole o choro"
        />
      )}
      {alerta && <Alerta alerta={setAlerta} textoAlerta="Miau! Você não tem chave" />}
      <Menu className='menu' cat={contadorCat} chave={contadorChave} coin={contadorCoin} />
      <div className='container-summon'>
        <div className='container-catch'>
          {capturando ? (
            <div className="carta-loading">
              <p>🎯 Capturando Poke... Ops!</p>
            </div>
          ) : mostrarImagem && character ? (
            <img
              style={{ maxWidth: '250px', maxHeight: '388px' }}
              className={`carta ${getCartaRaridade(favorito)}`}
              src={character.images.jpg.image_url}
              alt={character.name}
            />
          ) : (
            <img className='carta' src={backcard} alt="carta virada" />
          )}

          <Descricao nPersonagem={nomePersonagem} nAnime={nomeAnime} estrela={estrela} fav={favorito} />
          <button className='btn-catch' disabled={ativaBtn} onClick={teste}>Catch</button>
        </div>

        <div className='inventario-content'>
          <div className='inventario-cartas'>
            {[...salvarCarta].reverse().map((carta, index) => (
              <div key={index}>
                <img
                  src={carta.imagem_anime}
                  alt={carta.nome}
                  className={`carta-inventario-raridade ${getCartaRaridade(carta.favorito)}`}
                />
                <div className='nome-link-carta'>
                  <a
                    href={carta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-nome-carta"
                    style={{
                      color: "#0d6efd",
                      textDecorationLine: "underline",
                      textUnderlineOffset: "4px"
                    }}
                  >
                    <p>{carta.nome}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summon;