import { useState, useEffect } from 'react'
import { fetchCuratedPhotos } from '../database/pexels'
import Photocard from '../components/PhotoCard'
import '../styles/home.css'

const Home = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const photosData = await fetchCuratedPhotos()
        setPhotos(photosData)
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }

    getPhotos()
  }, [])

  return (
    <div className='home'>
      {photos.map(photo => (
        <Photocard key={photo.id} photoId={photo.id} />
      ))}
    </div>
  )
}

export default Home
