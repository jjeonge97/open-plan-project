import { PhotoInfoRes } from '@/apis/type';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type PhotoState = {
  photoInfo: PhotoInfoRes | null;
  setPhotoInfo: (photo: PhotoInfoRes) => void;
  clear: () => void;
};

export const usePhotoStore = create<PhotoState>()(
  persist(
    (set) => ({
      photoInfo: null,
      setPhotoInfo: (photo) => set({ photoInfo: photo }),
      clear: () => set({ photoInfo: null }),
    }),
    {
      name: 'photo-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
