import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const APINode = ({ id }) => {
  const [endpoint, setEndpoint] = useState("");

  return (
    <BaseNode
      title="🌐 API Node"
      inputs={[{ id: `${id}-request`, top: "50%" }]}
      outputs={[{ id: `${id}-response`, top: "50%" }]}
    >
      <label>Endpoint</label>
      <input
        type="text"
        placeholder="https://api.example.com"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
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