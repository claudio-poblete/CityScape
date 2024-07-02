import { useState, useEffect, useContext } from 'react'
import { fetchPhotoById } from '../database/pexels'
import { FavoritesContext } from '../context/FavoritesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import '../styles/photocard.css'

const Photocard = ({ photoId }) => {
  const [photo, setPhoto] = useState(null)
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  useEffect(() => {
    const getPhoto = async () => {
      try {
        const photoData = await fetchPhotoById(photoId)
        setPhoto(photoData)
      } catch (error) {
        console.error('Error fetching photo:', error)
      }
    }

    getPhoto()
  }, [photoId])

  if (!photo) return <div>Loading...</div>

  const isFavorite = favorites.some(fav => fav.id === photo.id)

  return (
    <div className='photocard'>
      <img src={photo.src.large} alt={photo.alt} className='photocard-img' />
      <p className='photocard-caption'>{photo.photographer}</p>
      <button className='favorite-btn' onClick={() => toggleFavorite(photo)}>
        <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} />
      </button>
    </div>
  )
}

export default Photocard
