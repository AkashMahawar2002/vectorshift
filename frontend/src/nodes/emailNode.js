import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const EmailNode = ({ id }) => {
  const [email, setEmail] = useState("");

  return (
    <BaseNode
      title="📧 Email"
      inputs={[{ id: `${id}-message`, top: "50%" }]}
      outputs={[{ id: `${id}-status`, top: "50%" }]}
    >
      <label>Recipient</label>
      <input
        type="email"
        placeholder="john@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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