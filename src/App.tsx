import './App.css'
import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import RatingsModal from "./components/RatingsModal";
import type { TableRow } from "./types/table";

function App() {
  const [rows, setRows] = useState<TableRow[]>([]);
  const [editingRow, setEditingRow] = useState<TableRow | null>(null);
  const [viewRow, setViewRow] = useState<TableRow | null>(null);

  const handleSubmit = (row: TableRow) => {
    setRows((prev) => {
      const exists = prev.find((r) => r.id === row.id);
      return exists
        ? prev.map((r) => (r.id === row.id ? row : r))
        : [...prev, row];
    });
    setEditingRow(null);
  };

  const handleDelete = (id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="app-container">
      <div className="left-container">
        <Form onSubmit={handleSubmit} editingRow={editingRow} />
      </div>

      <div className="right-container">
        <Table
          rows={rows}
          onView={setViewRow}
          onEdit={setEditingRow}
          onDelete={handleDelete}
        />
      </div>

      {viewRow && (
        <RatingsModal
          row={viewRow}
          onClose={() => setViewRow(null)}
        />
      )}
    </div>
  );
}

export default App;