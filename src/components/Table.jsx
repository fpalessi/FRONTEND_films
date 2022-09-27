import Film from "./Film";

const Table = ({ films }) => {
  return (
    <>
      <table className="table border">
        <thead>
          <tr>
            <th scope="col">Película</th>
            <th scope="col">Nota</th>
            <th scope="col">Persona</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <Film key={film.id} film={film} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
