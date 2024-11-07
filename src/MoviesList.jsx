import {Row, Card, Col} from "react-bootstrap";
import CardMovies from "./CardMovies";
import  PaginationComponent  from "./Pagination";


const MoviesList = ({movies, getPage, pageCount})=>{
    return (
        <Row className="mt-3">
            {movies.length >= 1 ? (movies.map((mov)=>{
                return (<CardMovies key={mov.id} mov={mov}/>)
            })) : <h3 className="text-center p-5">No films to show...</h3>}
            <PaginationComponent getPage={getPage} pageCount={pageCount}/>
        </Row>
    )
}
export default MoviesList;