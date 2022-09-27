import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(141, 141, 141, 0.79)",
  },
};

const DeleteModal = ({ id, showModal, deleteAction, cancelAction }) => {
  return (
    <Modal style={customStyles} isOpen={showModal}>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">¿Estás seguro?</h3>
        </div>
        <div className="modal-body">
          <p>Si eliminas esta película no podrás recuperarla más adelante</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={cancelAction}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => deleteAction(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
