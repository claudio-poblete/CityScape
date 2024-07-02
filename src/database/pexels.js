const API_KEY = 'CcO7wRZ7lKRO8EEFQbdVdyxXmT4GxasCwcpveBRcKyPcVgTxZmAbgGgf'
const BASE_URL = 'https://api.pexels.com/v1'

export const fetchPhotoById = async (photoId) => {
  try {
    const response = await fetch(`${BASE_URL}/photos/${photoId}`, {
      headers: {
        Authorization: API_KEY
      }
    })

    if (!response.ok) {
      throw new Error('Error fetching photo from Pexels')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching photo from Pexels:', error)
    throw error
  }
}

export const fetchCuratedPhotos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/curated`, {
      headers: {
        Authorization: API_KEY
      }
    })

    if (!response.ok) {
      throw new Error('Error fetching curated photos from Pexels')
    }

    const data = await response.json()
    return data.photos
  } catch (error) {
    console.error('Error fetching curated photos from Pexels:', error)
    throw error
  }
}
