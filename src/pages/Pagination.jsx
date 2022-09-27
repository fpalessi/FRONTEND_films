import { useState } from "react";
import { useQuery } from "react-query";
import { getPFilms } from "../api/films";
import Spinner from "../components/Spinner";
import Table from "../components/Table";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const {
    data: films,
    status,
    error,
  } = useQuery(["paginatedFilms", page], () => getPFilms(page), {
    keepPreviousData: true,
  });

  const previousPage = () => {
    if (page > 1) setPage(page - 1);
  };
  const followingPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <div>
        {status === "error" && <div>{error.message}</div>}
        {status === "loading" && (
          <div>
            <Spinner />
          </div>
        )}
        {status === "success" && <Table films={films} />}
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="page-link"
          onClick={previousPage}
          disabled={page <= 1}
        >
          Anterior
        </button>
        <span style={{ marginTop: "5px" }}>Página: {page}</span>
        <button className="page-link" onClick={followingPage}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default Pagination;
