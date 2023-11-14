import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Contacto from "./Pages/Contacto";
import Blog from "./Pages/Blog";
import LayoutPublic from "./Layouts/LayoutPublic";
import NotFound from "./Pages/NotFound";
import BlogDetails from "./Pages/BlogDetails";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route element={<LayoutPublic />} path="/">
                    <Route element={<Inicio />} index />
                    <Route element={<Contacto />} path="/contacto" />
                    <Route element={<Blog />} path="/blog" />
                    <Route element={<BlogDetails />} path="/blog/:id" />
                    <Route element={<NotFound />} path="/*" />
                </Route>
            </Routes>
        </>
    );
};

export default App;
