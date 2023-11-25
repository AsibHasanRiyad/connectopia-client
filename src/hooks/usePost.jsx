
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePost = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const {data: post=[], refetch} = useQuery({
        queryKey:['post',user?.email],
        queryFn:async() =>{
                const res = await axiosPublic.get(`/post?email=${user?.email}`)
            return res.data
        }
    })
    return [post, refetch]
}

export default usePost;