import type { TableRow } from "../types/table";

type Props = {
  rows: TableRow[];
  onView: (row: TableRow) => void;
  onEdit: (row: TableRow) => void;
  onDelete: (id: string) => void;
};

const Table = ({ rows, onView, onEdit, onDelete }: Props) => {
  return (
    <table id="main-table" className="data-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Order</th>
          <th>Email</th>
          <th>Purchase</th>
          <th>Method</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {rows.length === 0 && (
          <tr>
            <td colSpan={6} style={{ textAlign: "center" }}>
              No records
            </td>
          </tr>
        )}

        {rows.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}.</td>
            <td>{item.orderNumber}</td>
            <td>{item.email}</td>
            <td>{item.purchaseDate}</td>
            <td>{item.shoppingMethod}</td>
            <td>
              <div className="table-actions">
                <button className="view-btn" onClick={() => onView(item)}>👁</button>
                <button className="edit-btn" onClick={() => onEdit(item)}>✎</button>
                <button className="delete-btn" onClick={() => onDelete(item.id)}>🗑</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;