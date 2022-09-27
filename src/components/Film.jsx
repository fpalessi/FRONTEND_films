import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import axios from "axios";

const Film = ({ film }) => {
  const [deleteId, setDeleteId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    (id) => axios.delete(`${import.meta.env.VITE_BACKEND_URL}/films/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
        hideModal();
      },
    }
  );

  const showDeleteModal = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const onDelete = async (id) => {
    deleteMutation.mutateAsync(id);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const { id, titulo, nota, persona } = film;

  return (
    <>
      <DeleteModal
        id={deleteId}
        showModal={showModal}
        deleteAction={onDelete}
        cancelAction={hideModal}
      />
      <tr>
        <td>{titulo}</td>
        <td>
          <span className="font-weight-bold">{nota}</span>
        </td>
        <td>{persona}</td>
        <td className="p-2">
          <Link
            type="button"
            className="btn btn-outline-dark mr-2 font-weight-bold"
            to={`/film/edit/${id}`}
          >
            Editar
          </Link>
          <button
            type="button"
            className="btn btn-outline-secondary mr-2 font-weight-bold"
            onClick={() => showDeleteModal(id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

export default Film;
