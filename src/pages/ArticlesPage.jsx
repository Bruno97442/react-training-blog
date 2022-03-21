import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import { getLinkPath } from "../Routing";
import '../components/ArticlesList.css';
import '../components/Animation.css';

const ArticlesPage = () => {
    let title = "Last Articles"
    const location = useLocation()
    let [blogShow, setBlogShow] = useState(true)

    useEffect(() => {
        setBlogShow(
            location.pathname === getLinkPath('articles')
                ? true
                : false
        )

    }, [location.pathname])
    return (
        <section className="articlesList p-5 text-center transition">
            {blogShow && <h1 className="h1">{title}</h1>}
            <Outlet />
            {
                blogShow && <ArticlesList pagination={8} />
            }
        </section>
    )
}

export default ArticlesPage