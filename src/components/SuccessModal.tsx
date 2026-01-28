import Modal from "./Modal";

type Props = {
  onClose: () => void;
};

const SuccessModal = ({ onClose }: Props) => {
  return (
    <Modal
      title="Success"
      onClose={onClose}
      actions={
        <button className="primary-btn" onClick={onClose}>
          OK
        </button>
      }
    >
      <p>Your feedback has been submitted successfully</p>
    </Modal>
  );
};

export default SuccessModal;