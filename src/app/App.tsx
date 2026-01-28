import '../App.css';
import { useState } from 'react';
import Form from '../features/registration/components/Form';
import Table from '../features/registration/components/Table';
import RatingsModal from '../features/registration/components/RatingsModal';
import type { TableRow } from '../features/registration/types/table';
import Modal from '../shared/components/Modal';
import ThemeToggle from '../shared/components/ThemeToggle';

function App() {
  const [rows, setRows] = useState<TableRow[]>([]);
  const [editingRow, setEditingRow] = useState<TableRow | null>(null);
  const [viewRow, setViewRow] = useState<TableRow | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  const handleSubmit = (row: TableRow) => {
    const isDuplicate = rows.some((r) => {
      if (editingRow && r.id === editingRow.id) return false;
      return r.orderNumber === row.orderNumber && r.email === row.email;
    });
    if (isDuplicate) {
      setShowDuplicateModal(true);
      return;
    }
    setRows((prev) => {
      const exists = prev.find((r) => r.id === row.id);
      return exists ? prev.map((r) => (r.id === row.id ? row : r)) : [...prev, row];
    });
    setEditingRow(null);
    setShowSuccess(true);
  };

  const handleDeleteRequest = (id: string) => {
    setDeleteTarget(id);
  };
  const handleConfirmDelete = () => {
    setRows((prev) => prev.filter((r) => r.id !== deleteTarget));
    setDeleteTarget(null);
  };

  return (
    <div className="app-container">
      <ThemeToggle/>
      <div className="left-container">
        <Form onSubmit={handleSubmit} editingRow={editingRow} />
      </div>

      <div className="right-container">
        <Table
          rows={rows}
          onView={(row) => setViewRow(row)}
          onEdit={(row) => setEditingRow(row)}
          onDelete={(id) => handleDeleteRequest(id)}
        />
      </div>

      {viewRow && <RatingsModal row={viewRow} onClose={() => setViewRow(null)} />}

      {showSuccess && (
        <Modal
          title="Success"
          onClose={() => setShowSuccess(false)}
          actions={
            <button className="primary-btn" onClick={() => setShowSuccess(false)}>
              OK
            </button>
          }
        >
          <p>Your feedback has been submitted successfully</p>
        </Modal>
      )}

      {deleteTarget && (
        <Modal
          title="Confirm Delete"
          onClose={() => setDeleteTarget(null)}
          actions={
            <>
              <button onClick={() => setDeleteTarget(null)}>Cancel</button>
              <button className="danger-btn" onClick={handleConfirmDelete}>
                Delete
              </button>
            </>
          }
        >
          <p>Are you sure you want to delete this record?</p>
        </Modal>
      )}
      {showDuplicateModal && (
        <Modal
          title="Duplicate Entry"
          onClose={() => setShowDuplicateModal(false)}
          actions={
            <button className="danger-btn" onClick={() => setShowDuplicateModal(false)}>
              Ok
            </button>
          }
        >
          <p>
            This <strong>Order Number</strong> and <strong>Email</strong> combination already
            exists.
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;
