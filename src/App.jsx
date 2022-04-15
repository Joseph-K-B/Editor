import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Main from "./views/Main";
import Gallery from "./views/Gallery";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/editor' element={<Main />} />
          <Route path='/particles' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}
