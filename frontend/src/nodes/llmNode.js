import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  const [model, setModel] = useState("GPT-4");
  const [temperature, setTemperature] = useState(0.7);

  return (
    <BaseNode
      title="🤖 LLM Node"
      inputs={[
        {
          id: `${id}-system`,
          top: "35%",
        },
        {
          id: `${id}-prompt`,
          top: "70%",
        },
      ]}
      outputs={[
        {
          id: `${id}-response`,
          top: "50%",
        },
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <label>Model</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            style={inputStyle}
          >
            <option>GPT-4</option>
            <option>GPT-3.5</option>
            <option>Claude</option>
            <option>Gemini</option>
          </select>
        </div>

        <div>
          <label>Temperature</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="1"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            style={inputStyle}
          />
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