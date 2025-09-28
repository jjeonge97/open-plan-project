import { getPhotoInfo } from '@/apis/PhotoApis';
import { useQuery } from '@tanstack/react-query';

export const usePhotoInfoQuery = (id: string) => {
  return useQuery({
    queryKey: ['photo-info', id],
    queryFn: () => getPhotoInfo(id),
    select: (data) => {
      return data.data;
    },
  });
};
