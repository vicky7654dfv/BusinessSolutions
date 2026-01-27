import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage1 from './pages/HomePage1/HomePage1'
import Error from './pages/Error/Error'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage1 />} />
        <Route path='/Error' element={<Error />} />
      </Routes>
    </HashRouter>
  )
}

export default App
