import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const DatabaseNode = ({ id }) => {
  const [table, setTable] = useState("");

  return (
    <BaseNode
      title="🗄️ Database"
      inputs={[{ id: `${id}-query`, top: "50%" }]}
      outputs={[{ id: `${id}-result`, top: "50%" }]}
    >
      <label>Table Name</label>
      <input
        type="text"
        placeholder="users"
        value={table}
        onChange={(e) => setTable(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "5px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
        }}
      />
    </BaseNode>
  );
};