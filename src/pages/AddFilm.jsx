import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { addFilm } from "../api/films";
import Form from "../components/Form";
import Spinner from "../components/Spinner";

const AddFilm = () => {
  const mutation = useMutation((film) => addFilm(film));
  const { status, error, isSuccess } = mutation;
  // status contains booleans isSuccess, isError, isLoading

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    mutation.mutate(data);
  };

  if (isSuccess) {
    navigate("/");
  }
  return (
    <div>
      <h2>Añadir película</h2>

      {status === "error" && <div>An error occurred: {error.message}</div>}

      {status === "loading" && (
        <div>
          <Spinner />
        </div>
      )}

      <Form submitText="Añadir" submitAction={handleSubmit} />
    </div>
  );
};

export default AddFilm;
