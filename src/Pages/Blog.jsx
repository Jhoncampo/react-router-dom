import React, { useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {

    const [searchParams, setSearchParams ] = useSearchParams()

    useEffect(()=>{
        console.log(searchParams.get("name"))
    },[searchParams])

    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/"
    );
    if (loading) return <p>Loading data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <h1>Blog</h1>
            <ul className="list-group">
                {data.map((item) => (
                    <Link
                        to={`/blog/${item.id}`}
                        key={item.id}
                        className="list-group-item"
                    >
                        {`${item.id} - `}
                        {item.title}
                    </Link>
                ))}
            </ul>
        </>
    );
};

export default Blog;
