import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import GalleryView from './views/GalleryView';
import Main from './views/MainView';
import ParticleView from './views/ParticleView';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/gallery' element={<GalleryView />} />
          <Route path='/gallery' element={<ParticleView />} />
          <Route path='/editor' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}
