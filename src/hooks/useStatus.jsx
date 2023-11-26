import  { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useStatus = () => {
    const [status, setStatus] = useState('')
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const { data: currentUser, isLoading } = useQuery({
        queryKey: ["currentUser", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/users?email=${user.email}`);
          return res.data;
        },
      });
      useEffect(() => {
        if (!isLoading && currentUser && currentUser.length > 0) {
          const currentStatus = currentUser[0].status;
        //   console.log(currentStatus);
          setStatus(currentStatus);
        }
      }, [isLoading, currentUser, status]);
    return [status]
};

export default useStatus;