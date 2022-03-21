import React, { useEffect, useState } from "react"
import { Alert, Col, Pagination, Row } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ArticleService from "../ArticleService"
import Article from "../components/Article";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

const ArticlesList = ({ searchbarOff, pagination, max = 20 }) => {
    let [articleService] = useState(new ArticleService())
    const [articles, setArticles] = useState([])
    const [showArticles, setShowArticles] = useState([])
    // gestion d'affiche des grids
    const [display] = useState("col")
    const [search, setSearch] = useState("")
    const sizing = {
        list: [12, 8, 8],
        col: [12, 6, 3]
    }
    const isPageCount = typeof pagination === "number"
    const [pageCount, setPageCount] = useState(isPageCount ? Math.ceil(articles / pagination) : 0)
    const [searchParams, setSearchParams] = useSearchParams()

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

    function paginationHandler() {
        setPageCount(Math.ceil(articles / pagination))
        

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
        // if have props.max parameter
        let arrTmp = [...articles]
        if (max && max > 0) {
            arrTmp = arrTmp.splice(0, max)
        }
        setShowArticles(arrTmp)
   
    }, [articles])
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
                        style={{ height: "220px" }}
                    >
                        <Article cors={article} />
                    </Col>
                    ))
                }
                {
                    <Pagination />
                }
                {
                    !showArticles.length && !search.length && <Loader className="text-primary" scale="2" />
                }
                {
                    !showArticles.length && search.length && <Alert>No thing likes " {search} " found !</Alert>
                }
            </Row>
        </section>
    )
};

export default ArticlesList;
