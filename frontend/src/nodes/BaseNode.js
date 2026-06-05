import { Handle, Position } from "reactflow";

const fieldStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
};

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 260,
}) => {
  return (
    <div
      style={{
        width: width,
        minHeight: 140,
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "14px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        position: "relative",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            top: input.top,
            width: 10,
            height: 10,
            background: "#3b82f6",
          }}
        />
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            top: output.top,
            width: 10,
            height: 10,
            background: "#10b981",
          }}
        />
      ))}

      <div
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: "16px",
          marginBottom: "12px",
          color: "#111827",
        }}
      >
        {title}
      </div>

      {children}
    </div>
  );
};