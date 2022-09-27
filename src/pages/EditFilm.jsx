import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

import Form from "../components/Form";

const fetchFilm = async ({ queryKey }) => {
  const [key, { id }] = queryKey;
  const res = await fetch(`http://localhost:4000/films/${id}`);

  if (!res.ok) {
    throw new Error(response.statusText);
  }

  return res.json();
};

const EditFilm = () => {
  const { id } = useParams();
  const {
    data: films,
    error,
    isLoading,
    isError,
    status,
  } = useQuery(["film", { id }], fetchFilm);
  const mutation = useMutation((updatedFilm) =>
    axios.put(`http://localhost:4000/films/${id}`, updatedFilm)
  );

  const navigate = useNavigate();

  const { isSuccess } = mutation;

  const onSubmit = async (data) => {
    mutation.mutate(data);
  };
  if (isSuccess) {
    navigate("/");
  }
  return (
    <div>
      <h2>Editar película</h2>
      <div>
        {status === "error" && <div>{error.message}</div>}
        {status === "loading" && (
          <div>
            <Spinner />
          </div>
        )}
        {films && (
          <Form film={films} submitText="Actualizar" submitAction={onSubmit} />
        )}
      </div>
    </div>
  );
};

export default EditFilm;
