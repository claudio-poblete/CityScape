import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import Photocard from '../components/PhotoCard'
import '../styles/favorites.css'

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext)

  return (
    <div className='favorites'>
      {favorites.map(photo => (
        <Photocard key={photo.id} photoId={photo.id} />
      ))}
    </div>
  )
}

export default Favorites
