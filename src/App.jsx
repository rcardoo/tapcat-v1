import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Summon from './routes/Summon';
import Loja from './routes/Loja';
import Info from './routes/Info';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/summon' element={<Summon />} />
        <Route path='/shop' element={<Loja />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
