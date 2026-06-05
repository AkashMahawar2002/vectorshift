import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(
    data?.inputType || "Text"
  );

  return (
    <BaseNode
      title="📥 Input Node"
      outputs={[
        {
          id: `${id}-value`,
          top: "50%",
        },
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label>Input Type</label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            style={inputStyle}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
};