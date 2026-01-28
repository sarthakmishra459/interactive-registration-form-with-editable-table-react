import Modal from "./Modal";

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

const ConfirmDeleteModal = ({ onCancel, onConfirm }: Props) => {
  return (
    <Modal
      title="Confirm Delete"
      onClose={onCancel}
      actions={
        <>
          <button onClick={onCancel}>Cancel</button>
          <button className="danger-btn" onClick={onConfirm}>
            Delete
          </button>
        </>
      }
    >
      <p>Are you sure you want to delete this record?</p>
    </Modal>
  );
};

export default ConfirmDeleteModal;