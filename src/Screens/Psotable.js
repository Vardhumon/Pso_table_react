// PsoTable.js
import React, { useState } from "react";
import PsoRow from "../components/PsoRow";

export default function PsoTable() {
  const [data, setData] = useState([
    { co: "CO502.1", po: [3, 8, 7, 3, 4, 1, 1, 0, 3, 4, 2, 1], pso: [1, 0, 1] },
    { co: "CO502.2", po: [2, 4, 4, 4, 3, 1, 0, 0, 3, 4, 1, 1], pso: [1, 1, 1] },
    { co: "CO502.3", po: [3, 9, 2, 5, 3, 1, 0, 0, 3, 3, 1, 2], pso: [1, 0, 1] },
    { co: "CO502.4", po: [3, 4, 4, 2, 3, 0, 0, 1, 2, 3, 2, 2], pso: [1, 1, 1] },
    { co: "CO502.5", po: [3, 7, 4, 2, 2, 1, 0, 1, 2, 2, 2, 2], pso: [0, 1, 1] },
    { co: "CO502.6", po: [2, 4, 3, 4, 2, 1, 0, 1, 2, 2, 1, 2], pso: [0, 1, 1] },
  ]);

  const handleRowSave = (editedCo, editedPo, editedPso) => {
    const newData = data.map((item) => {
      if (item.co === editedCo) {
        return { ...item, po: editedPo, pso: editedPso };
      }
      return item;
    });
    setData(newData);
  };

  const addRow = () => {
    const newCo = `CO${data.length + 1}`;
    const newRow = { co: newCo, po: Array(12).fill(0), pso: Array(3).fill(0) };
    setData([...data, newRow]);
  };

  return (
    <div className="container-fluid vh-100 vw-100 custom-table overflow-auto">
      <div className="container-fluid bg-dark text-white cusTable">
        <div className="row bg-dark text-white no-wrap fs-4 d-flex justify-content-center font-weight-bold">
          <div className="col-1 fs-5 font-weight-bold">Course Outcome</div>
          <div className="col-9">
            <div className="row program-outcomes d-flex justify-content-center fs-5 font-weight-bold">
              Program Outcomes (PO)
            </div>
            <div className="row">
              {[...Array(12).keys()].map((index) => (
                <div className="col" key={index}>
                  PO{index + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="col-2">
            <div className="row program-specific-outcome d-flex justify-content-center fs-5 font-weight-bold">
              Program Specific Outcomes (PSO)
            </div>
            <div className="row">
              {[...Array(3).keys()].map((index) => (
                <div className="col" key={index}>
                  PSO{index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Entries */}
        {data.map((item, index) => (
          <PsoRow
            key={index}
            co={item.co}
            po={item.po}
            pso={item.pso}
            onSave={handleRowSave}
          />
        ))}

        {/* Add row button */}
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={addRow}>
              Add Row
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
