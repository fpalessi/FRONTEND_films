import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-between sm:flex-column">
      <div className="container">
        <div>
          <Link to={"/"} className="unstyled">
            <p style={{ fontSize: "15px" }}>
              Películas ft. React Query{" "}
              <img src="../react-query.svg" alt="RQ" width="20" />
            </p>
          </Link>
        </div>
        <div>
          <Link to={"/paginated"}>
            <p>Paginación</p>
          </Link>
        </div>{" "}
        <div>
          <Link to={"/film/add"}>
            <p>Nueva Película +</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
