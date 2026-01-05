import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favoriteCharacters: string[];
  favoriteMovies: string[];
  favoriteGadgets: string[];
  toggleFavoriteCharacter: (id: string) => void;
  toggleFavoriteMovie: (id: string) => void;
  toggleFavoriteGadget: (id: string) => void;
  isFavoriteCharacter: (id: string) => boolean;
  isFavoriteMovie: (id: string) => boolean;
  isFavoriteGadget: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteCharacters: [],
      favoriteMovies: [],
      favoriteGadgets: [],
      toggleFavoriteCharacter: (id) =>
        set((state) => ({
          favoriteCharacters: state.favoriteCharacters.includes(id)
            ? state.favoriteCharacters.filter((c) => c !== id)
            : [...state.favoriteCharacters, id],
        })),
      toggleFavoriteMovie: (id) =>
        set((state) => ({
          favoriteMovies: state.favoriteMovies.includes(id)
            ? state.favoriteMovies.filter((m) => m !== id)
            : [...state.favoriteMovies, id],
        })),
      toggleFavoriteGadget: (id) =>
        set((state) => ({
          favoriteGadgets: state.favoriteGadgets.includes(id)
            ? state.favoriteGadgets.filter((g) => g !== id)
            : [...state.favoriteGadgets, id],
        })),
      isFavoriteCharacter: (id) => get().favoriteCharacters.includes(id),
      isFavoriteMovie: (id) => get().favoriteMovies.includes(id),
      isFavoriteGadget: (id) => get().favoriteGadgets.includes(id),
    }),
    {
      name: 'doraemon-favorites',
    }
  )
);
