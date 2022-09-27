import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = ({ film, submitText, submitAction }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: film || {},
  });

  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={handleSubmit(submitAction)}>
        <div className="form-row">
          <div className="col-4">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              {...register("titulo", { required: true })}
              className="form-control"
            />
            <span className="errors">
              {errors.titulo && "Debes introducir un título*"}
            </span>
          </div>

          <div className="col-2">
            <label htmlFor="nota">Nota</label>
            <input
              type="number"
              {...register("nota", { required: true, min: 1, max: 10 })}
              className="form-control"
            />

            <span className="errors">
              {errors.nota &&
                errors.nota.type === "required" &&
                "Debes introducir una nota*"}
              {errors.nota &&
                errors.nota.type === "min" &&
                "La nota introducida debe ser mayor que 0*"}
              {errors.nota &&
                errors.nota.type === "max" &&
                "La nota introducida debe ser menor o igual que 10*"}
            </span>
          </div>

          <div className="col-4">
            <label htmlFor="persona">Añadida por:</label>
            <input
              type="text"
              {...register("persona", { required: true })}
              className="form-control"
            />
            <span className="errors">
              {errors.persona && "Debes introducir tu nombre*"}
            </span>
          </div>
        </div>
        <div className="d-flex">
          <button type="submit" className="btn btn-primary mt-3 mr-2">
            {submitText}
          </button>
          <button
            onClick={() => navigate("/")}
            className="btn btn-secondary mt-3"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
