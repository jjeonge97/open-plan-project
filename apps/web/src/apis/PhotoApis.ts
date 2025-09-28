import axiosInstance from './axiosInstance';
import { PhotoInfoRes } from './type';

export const getPhotoInfo = (id: string) => {
  return axiosInstance.get<PhotoInfoRes>(`/id/${id}/info`);
};
