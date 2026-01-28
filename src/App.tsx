import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import RatingsModal from "./components/RatingsModal";
import type { TableRow } from "./types/table";
import SuccessModal from "./components/SuccessModal";
import ConfirmDeleteModal from "./components/DeleteModal";

function App() {
  const [rows, setRows] = useState<TableRow[]>([]);
  const [editingRow, setEditingRow] = useState<TableRow | null>(null);
  const [viewRow, setViewRow] = useState<TableRow | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const handleSubmit = (row: TableRow) => {
    setRows((prev) => {
      const exists = prev.find((r) => r.id === row.id);
      return exists
        ? prev.map((r) => (r.id === row.id ? row : r))
        : [...prev, row];
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
      <div className="left-container">
        <Form onSubmit={handleSubmit} editingRow={editingRow} />
      </div>

      <div className="right-container">
        <Table
          rows={rows}
          onView={(row)=>setViewRow(row)}
          onEdit={(row)=>setEditingRow(row)}
          onDelete={(id)=>handleDeleteRequest(id)}
        />
      </div>

      {viewRow && (
        <RatingsModal row={viewRow} onClose={() => setViewRow(null)} />
      )}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      {deleteTarget && (
        <ConfirmDeleteModal
          onCancel={() => setDeleteTarget(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default App;
