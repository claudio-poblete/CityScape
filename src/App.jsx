import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'

function App () {
  return (
    <FavoritesProvider>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/favorites'
          element={<Favorites />}
        />
      </Routes>
      <Footer />
    </FavoritesProvider>
  )
}

export default App
