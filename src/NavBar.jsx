import { Col, Container, Row } from "react-bootstrap";

const NavBar = ({search}) => {

  const onSearch = (word)=>{
    search(word)
  }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <img
              className="logo"
              src="https://github.com/bakrgit/movies-list-project/blob/master/src/images/logo.png?raw=true"
              alt="dfs"
            />
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search">O</i>
              <input onChange={(e)=>onSearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavBar;
