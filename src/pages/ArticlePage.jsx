import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ArticleService from "../ArticleService"
import { getLinkPath, LinkList } from "../Routing"

const ArticlePage = () => {
    const Id = parseInt(useParams().slug)
    const [articleService, setArticleService] = useState(new ArticleService())
    const [article, setArticle] = useState({})

    useEffect(() => {
        if (!articleService.isLoaded() || article.id !== Id)
            articleService.load().then(() => setArticle(articleService.getById(Id)))
    }, [article, Id])
    return (
        <section className="list">
            <small className="text-muted">
                <Link className="text-decoration-none" to={getLinkPath('home')}>Home</Link> &lt;
                <Link className="text-decoration-none" to={getLinkPath('articles')}>Articles</Link> &lt; article
            </small>
            <h1 className="h1">{article.title}</h1>
            <p className="text">{article.body}</p>
        </section>
    )
}

export default ArticlePage