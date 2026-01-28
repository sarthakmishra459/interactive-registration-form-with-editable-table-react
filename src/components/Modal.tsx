import React from "react";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  actions?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  onClose,
  actions,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">{children}</div>

        {actions && <div className="modal-footer">{actions}</div>}
      </div>
    </div>
  );
};

export default Modal;