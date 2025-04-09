import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './routes/Home';
import Summon from './routes/Summon';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/summon' element={<Summon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
