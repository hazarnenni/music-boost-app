import axios from 'axios';

class DeezerAPI {
  static async fetchRandomAlbums(limit = 10) {
    try {
      const response = await axios.get(`http://localhost:4000/api/albums`);
      return response.data;
    } catch (error) {
      console.error('Error fetching random albums:', error);
      throw error;
    }
  }

  static async fetchTopArtists(limit = 10) {
    try {
      const response = await axios.get(`http://localhost:4000/api/artists`);
      return response.data;
    } catch (error) {
      console.error('Error fetching top artists:', error);
      throw error;
    }
  }

  static async fetchTopTracks(limit = 10) {
    try {
      const response = await axios.get(`http://localhost:4000/api/tracks`);
      return response.data;
    } catch (error) {
      console.error('Error fetching top tracks:', error);
      throw error;
    }
  }
}

export default DeezerAPI;