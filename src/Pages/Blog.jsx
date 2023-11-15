import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/"
    );
    if (loading) return <p>Loading data...</p>;
    if (error) return <p>{error}</p>;

    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };

    return (
        <>
            <h1>Blog</h1>
            <input
                type="text"
                name="filter"
                value={searchParams.get("filter") || ""}
                onChange={handleChange}
                placeholder="Buscar..."
                className="form-control my-3"
            />
            <ul className="list-group">
                {data
                    .filter((item) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = item.title.toLocaleLowerCase();
                        return name.startsWith(filter.toLocaleLowerCase());
                    })
                    .map((item) => (
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
