import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id }) => {
  const [condition, setCondition] = useState("contains");

  return (
    <BaseNode
      title="🔍 Filter"
      inputs={[{ id: `${id}-data`, top: "50%" }]}
      outputs={[{ id: `${id}-filtered`, top: "50%" }]}
    >
      <label>Condition</label>
      <select
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "5px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
        }}
      >
        <option value="contains">Contains</option>
        <option value="equals">Equals</option>
        <option value="startsWith">Starts With</option>
        <option value="endsWith">Ends With</option>
      </select>
    </BaseNode>
  );
};