import { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = url => {
    const [data , setData] = useState([]);
    const [isPending , setIspending] = useState(true);
    const [error , setError] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchData = async () => {
                setIspending(true);
                    axios({
                        method: 'get',
                        url: url,
                    })
                    .then(res => {
                        setData(res.data);
                        setIspending(false);
                        setError('');
                    })
                    .catch(err => {
                        setData([]);
                        setIspending(false);
                        setError(err.message);
                    })
            }
            fetchData();
        }, 700);
        
        return () => clearTimeout(timer);
    } , [url])

    return [data , isPending , error];
}

export default useFetch