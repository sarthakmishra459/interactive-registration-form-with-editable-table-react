import React from 'react';
import type { TableRow } from '../types/table';

type Props = {
  row: TableRow;
  onClose: () => void;
};

const RatingsModal: React.FC<Props> = ({ row, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Ratings Details</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(row.ratings).map(([category, value]) => (
              <tr key={category}>
                <td>{category.replace(/-/g, ' ')}</td>
                <td>{value === 0 ? 'N/A' : value}</td>
              </tr>
            ))}
          </tbody>
          <div className="ratings-textareas">
            {row.whatDidYouLike && (
              <div className="textarea-block">
                <label>What Did You Like?</label>
                <p>{row.whatDidYouLike}</p>
              </div>
            )}

            {row.whatToImprove && (
              <div className="textarea-block">
                <label>What To Improve?</label>
                <p>{row.whatToImprove}</p>
              </div>
            )}
            {row.additionalComment && (
              <div className="textarea-block">
                <label>Additional Comments:</label>
                <p>{row.additionalComment}</p>
              </div>
            )}
          </div>
        </table>
      </div>
    </div>
  );
};

export default RatingsModal;
