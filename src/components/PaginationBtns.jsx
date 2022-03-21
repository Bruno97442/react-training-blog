import { Pagination } from "react-bootstrap"

const PaginationBtns = ({ pageCount, currentPage, onClick, displayNone }) => {

    function navHandler(e) {
        e.preventDefault()
        const tryGetLink = e.nativeEvent.path.find(ele => ele.tagName === "A")
        if(tryGetLink){
            onClick(tryGetLink.getAttribute('href'))
        }
    }
    const nearChildrenLink = relativePosition => (parseInt(currentPage) + relativePosition).toString()
    const pageCountStr = pageCount.toString()

    return (

                <Pagination onClick={navHandler} className={["justify-content-center", displayNone && "d-none"].join(" ")}>
                    <Pagination.First href="1" disabled={currentPage === 1} />
                    <Pagination.Prev href={nearChildrenLink(-1)} disabled={currentPage === 1} />
                    {
                        currentPage > 4
                        && (
                            <>
                                <Pagination.Item href="1">1</Pagination.Item>
                                <Pagination.Item disabled>...</Pagination.Item>
                            </>
                        )
                    }
                    {
                        currentPage > 1
                        && <Pagination.Item href={nearChildrenLink(-1)}>{nearChildrenLink(-1)}</Pagination.Item>
                    }
                    <Pagination.Item href={currentPage} active>{currentPage}</Pagination.Item>
                    {
                        currentPage < (pageCount)
                        && <Pagination.Item href={nearChildrenLink(+1)}>{nearChildrenLink(+1)}</Pagination.Item>
                    }
                    {
                        currentPage < (pageCount - 4)
                        && (
                            <>
                                <Pagination.Item disabled>...</Pagination.Item>
                                <Pagination.Item href={pageCountStr} disabled={currentPage === pageCount} >{pageCount}</Pagination.Item>
                            </>
                        )
                    }
                    <Pagination.Next href={nearChildrenLink(+1)} disabled={currentPage === pageCount} />
                    <Pagination.Last href={pageCountStr} disabled={currentPage === pageCount} />
                </Pagination >
    )
}
export default PaginationBtns