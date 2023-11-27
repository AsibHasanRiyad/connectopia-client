import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useComments = ({rootPostId}) => {
    const axiosSecure = useAxiosSecure()
    const [comments, setComments] = useState([])
   useEffect( () =>{
    axiosSecure.get(`/comments?rootPostId=${rootPostId}`)
    .then(res =>{
      console.log(res.data);
      setComments(res.data)
    })
   },[axiosSecure, rootPostId])
    return [comments]
}
export default useComments