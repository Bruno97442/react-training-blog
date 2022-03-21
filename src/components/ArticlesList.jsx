import React, { useEffect, useState } from "react"
import { Alert, Col, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ArticleService from "../ArticleService"
import Article from "../components/Article";
import { getLinkPath } from "../Routing";
import Loader from "./Loader";
import PaginationBtns from "./PaginationBtns";
import SearchBar from "./SearchBar";

const ArticlesList = ({ searchbarOff, pagination, max }) => {
    let [articleService] = useState(new ArticleService())
    const [articles, setArticles] = useState([])
    const [showArticles, setShowArticles] = useState([])
    // gestion d'affiche des grids
    const [display] = useState("col")
    const sizing = {
        list: [12, 8, 8],
        col: [12, 6, 3]
    }
    // pagination
    const hasPageCount = typeof parseInt(pagination) === "number"
    const [pageCount, setPageCount] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams({ search: "", page: 0 })
    const [search, setSearch] = useState(searchParams.get("search"))
    const [currentPage, setCurrentPage] = useState(searchParams.get("page"))
    const searchParamsObj = () => { return { search: search, page: currentPage } }

    function debounce(fcn, timeout = 400) {
        let timer;
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => fcn.apply(this, args), timeout)
        }
    }
    function filterBySearchIn(list) {
        return list.filter(article => article.title.includes(search))
    }

    function onSearchChange(searchInput) {
        setSearch(searchInput)
        if(currentPage !== 1) setCurrentPage(1)

    }

    function paginationBtnsHandler(pageNb) {
        setSearchParams({ page: pageNb, search })
        setCurrentPage(pageNb > 0 ? pageNb : 1)
    }

    
    function paginationManager(list) {
        const correctPage = +currentPage === 0 ? 1 : +currentPage
        const start = (+(correctPage) - 1) * pagination
        // const start = (+(currentPage) - 1) * pagination
        console.log("'5 pag:>> '",list.length, start, start + pagination, " - ", currentPage, correctPage);

        return list.slice(start, start + pagination)
    }

    useEffect(() => {
        if (articles.length > 1) {
            let tmpArticles = articles
            let params = {}
            console.log('currentPage :>> ', currentPage);
            if (search.trim() !== "") {
                tmpArticles = filterBySearchIn(tmpArticles)
                params.search = search

            }
            setPageCount(Math.ceil(tmpArticles.length / pagination))
            
            if (hasPageCount) {
                if (tmpArticles.length > pagination)
                    params.page = currentPage
                tmpArticles = paginationManager(tmpArticles)
            }
            setSearchParams(params)
            setShowArticles(tmpArticles)
        }

    }, [search, currentPage])

    useEffect(() => {
        if (!articleService.isLoaded())
            articleService.load().then(articles => {
                articles.forEach((item, key) => item.title = key + " _ " + item.title)
                setArticles(articles)
                // if have props.max parameter
                let arrTmp = [...articles]
                console.log("'1 :>> '", arrTmp.length, currentPage, searchParams.get("page") == 0);
                if (max && max > 0) {
                    arrTmp = arrTmp.splice(0, max)
                }
                console.log("'2 :>> '", arrTmp.length, currentPage, searchParams.get("page") == 0);
                if (search.trim() !== "") {
                    
                    arrTmp = arrTmp.filter(article => article.title.includes(searchParams.get("search")))
                }
                console.log("'3 :>> '", arrTmp.length, currentPage, searchParams.get("page") == 0);
                
                if (hasPageCount) {
                    if(searchParams.get("page") == 0) {
                        setCurrentPage(1)
                        setSearchParams({ ...searchParamsObj(), page: 1 })
                    }
                    setPageCount(Math.ceil(arrTmp.length / pagination))
                    arrTmp = paginationManager(arrTmp)
                    console.log("'4 :>> '", arrTmp.length, currentPage, searchParams.get("page") == 0);
                }

                setShowArticles(arrTmp)
            })

    }, [articles])
    return (
        <section>
            {!searchbarOff && <SearchBar value={search} onInputChange={onSearchChange} />}
            <Row className="g-2 m-4">
                {
                    [...showArticles].map((article, key) =>
                    (<Col
                        key={key}
                        xs={sizing[display][0]}
                        md={sizing[display][1]}
                        lg={sizing[display][2]}
                        style={{ height: "220px" }}
                    >
                        <Article cors={article} order={key} />
                    </Col>
                    ))
                }
                {
                    !showArticles.length && !search.length && <Loader className="text-primary" scale="2" />
                }
                {
                    !showArticles.length && search.length && <Alert>No thing likes " {search} " found !</Alert>
                }
            </Row>
                <PaginationBtns
                    displayNone={!pagination || pageCount === 1}
                    currentPage={+searchParams.get("page")}
                    pageCount={pageCount}
                    rootLink={getLinkPath("articles")}
                    onClick={paginationBtnsHandler} />
        </section>
    )
};

export default ArticlesList;
