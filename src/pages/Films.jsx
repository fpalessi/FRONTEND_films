import { useQuery } from "react-query";
import { getFilms } from "../api/films";
import Spinner from "../components/Spinner";
import Table from "../components/Table";

const Films = () => {
  const { data: films, error, status } = useQuery(["films"], getFilms);
  // status contains booleans isSuccess, isError, isLoading

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
    </>
  );
};

export default Films;
