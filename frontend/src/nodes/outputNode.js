import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  return (
    <BaseNode
      title="📤 Output Node"
      inputs={[
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
          <label>Output Type</label>
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            style={inputStyle}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
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