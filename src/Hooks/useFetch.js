import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = useCallback(async()=>{
        setLoading(true)
        try {
            const res = await fetch(url)
            if(!res.ok) throw new Error("Error al conectarse con la API")
            const data = await res.json()
            setData(data)
        } catch (error) {
            setError(error.message)
        } finally{
            setLoading(false)
        }
    },[url])
    useEffect(()=>{
        getData()
    },[getData])

    return {
        data,
        loading,
        error
    };
};
