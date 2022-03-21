const Loader = ({loaded, className = "text-dark", scale = 1}) => {
    let style = {transform: `scale(${scale})`}
    return(
    <div className={["spinner", "text-center", loaded && "d-none"].join(" ")} style={style}>
        <div className={["spinner-border", className].join(" ")} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
)}
export default Loader