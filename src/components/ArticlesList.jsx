import React, { useEffect, useState } from "react"
import { Alert, Col, Container as section, Row } from "react-bootstrap";
import ArticleService from "../ArticleService"
import Article from "../components/Article";
import SearchBar from "./SearchBar";

const ArticlesList = ({ searchbarOff, pagination, max = 20 }) => {
    let [articleService] = useState(new ArticleService())
    const [articles, setArticles] = useState([])
    const [showArticles, setShowArticles] = useState([])
    const [display] = useState("col")
    const [search, setSearch] = useState("")
    const sizing = {
        list: [12, 8, 8],
        col: [12, 6, 3]
    }
    function debounce(fcn, timeout = 400) {
        let timer;
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => fcn.apply(this, args), timeout)
        }
    }
    function filter() {
        debounce(() => {

            setShowArticles(articles.filter(article => article.title.match(search)))
        }, 1000)()
    }

    function onSearchChange(searchInput) {
        setSearch(searchInput)
    }

    useEffect(() => {
        if (search.trim() === "") setShowArticles(articles)
        else filter()

    }, [search])

    useEffect(() => {
        if (!articleService.isLoaded())
            articleService.load().then(articles => {
                setArticles(articles)
            })
        let arrTmp = []
        if (!!max && max > 0) {
            console.log('"object" :>> ', "object");
            arrTmp = articles.slice(0, max)
        }
        setShowArticles(arrTmp)
    }, [articleService.getAll()])
    return (
        <section>
            {!searchbarOff && <SearchBar value={search} onInputChange={onSearchChange} />}
            <Row className="g-2 m-4">
                {
                    showArticles.map((article, key) =>
                    (<Col
                        key={key}
                        xs={sizing[display][0]}
                        md={sizing[display][1]}
                        lg={sizing[display][2]}
                        style={{height: "220px"}}
                    >
                        <Article cors={article} min />
                    </Col>
                    ))
                }
                {
                    !showArticles.length && <Alert>No thing likes " {search} " found !</Alert>
                }
            </Row>
        </section>
    )
};

export default ArticlesList;
