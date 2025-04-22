import { create } from 'zustand';
import axios from 'axios';

const useWatchlistStore = create((set) => ({
  watchlist: [],
  userId: localStorage.getItem("userId") || null,

  setUserId: (id) => set({ userId: id }),

  addToWatchlist: async (movie) => {
    try {
      const response = await axios.post('https://67f8a8012466325443ed4b3c.mockapi.io/watchlist', movie);
      set((state) => ({ watchlist: [...state.watchlist, response.data] }));
    } catch (error) {
      console.error('Gagal menambahkan ke watchlist:', error);
    }
  },

  removeFromWatchlist: async (id) => {
    try {
      await axios.delete(`https://67f8a8012466325443ed4b3c.mockapi.io/watchlist/${id}`);
      set((state) => ({
        watchlist: state.watchlist.filter(item => item.id !== id)
      }));
    } catch (error) {
      console.error('Gagal menghapus dari watchlist:', error);
    }
  },

  getWatchlistByUser: async (userId) => {
    try {
      const response = await axios.get(`https://67f8a8012466325443ed4b3c.mockapi.io/watchlist?userId=${userId}`);
      set({ watchlist: response.data });
    } catch (error) {
      console.error('Gagal mengambil watchlist berdasarkan user:', error);
    }
  },

  resetWatchlist: () => set({ watchlist: [] })
}));

export default useWatchlistStore;
