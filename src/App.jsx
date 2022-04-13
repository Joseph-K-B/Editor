import Main from "./views/Main";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/gallery' element={<Main />} />
          <Route path='/editor' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}
