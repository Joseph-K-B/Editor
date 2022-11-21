import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import GalleryView from './views/GalleryView';
import Main from './views/MainView';
import ModelView from './views/ModelView';
import ParticleView from './views/ParticleView';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/gallery' element={<GalleryView />} />
          <Route path='/particles' element={<ParticleView />} />
          <Route path='/editor' element={<Main />} />
          <Route path='/models' element={<ModelView />} />
        </Routes>
      </Router>
    </>
  );
};
