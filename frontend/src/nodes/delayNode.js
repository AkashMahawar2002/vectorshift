import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id }) => {
  const [seconds, setSeconds] = useState(5);

  return (
    <BaseNode
      title="⏱️ Delay"
      inputs={[{ id: `${id}-trigger`, top: "50%" }]}
      outputs={[{ id: `${id}-delayed`, top: "50%" }]}
    >
      <label>Delay Seconds</label>
      <input
        type="number"
        value={seconds}
        min="1"
        onChange={(e) => setSeconds(e.target.value)}
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