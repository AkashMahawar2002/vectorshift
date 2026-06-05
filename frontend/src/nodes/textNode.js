import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );

  const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)];

    return [...new Set(matches.map(match => match[1]))];
  };

  const variables = extractVariables(currText);

  const inputHandles = variables.map((variable, index) => ({
    id: `${id}-${variable}`,
    top: `${20 + index * 15}%`,
  }));

  // Dynamic width
  const longestLine = Math.max(
    ...currText.split("\n").map(line => line.length),
    20
  );

  const dynamicWidth = Math.min(
    Math.max(longestLine * 8, 260),
    500
  );

  return (
    <BaseNode
      title="📝 Text Template"
      width={dynamicWidth}
      inputs={inputHandles}
      outputs={[
        {
          id: `${id}-output`,
          top: "50%",
        },
      ]}
    >
      <label>Template</label>

      <textarea
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        rows={Math.max(4, currText.split("\n").length)}
        style={{
          width: "100%",
          marginTop: "8px",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          resize: "none",
          fontSize: "14px",
        }}
      />

      <div
        style={{
          marginTop: "10px",
          fontSize: "12px",
          color: "#6b7280",
        }}
      >
        Variables: {variables.length
          ? variables.join(", ")
          : "None"}
      </div>
    </BaseNode>
  );
};