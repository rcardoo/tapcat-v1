import { useEffect, useState } from 'react';
import axios from 'axios';

function Personagem() {
  const [personagem, setPersonagem] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarPersonagem() {
      try {
        const resposta = await axios.get('https://api.jikan.moe/v4/characters/1/full');
        setPersonagem(resposta.data.data);
      } catch (err) {
        setErro('Erro ao buscar o personagem');
      } finally {
        setCarregando(false);
      }
    }

    buscarPersonagem();
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{personagem.name}</h1>
      <img
        src={personagem.images.jpg.image_url}
        alt={personagem.name}
        style={{ width: '200px', borderRadius: '1rem' }}
      />
      <p style={{ maxWidth: '600px', margin: '1rem auto' }}>{personagem.about}</p>
    </div>
  );
}

export default Personagem;