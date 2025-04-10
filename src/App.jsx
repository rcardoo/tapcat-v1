import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Summon from './routes/Summon';
import Loja from './routes/Loja';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/summon' element={<Summon />} />
        <Route path='/loja' element={<Loja />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
