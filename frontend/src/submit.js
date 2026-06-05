import { useState } from "react";
import { useStore } from "./store";
import { AnalysisModal } from "./components/AnalysisModel";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const [result, setResult] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();

      console.log("Backend Response:", data);

      setResult(data);
      setOpen(true);
    } catch (error) {
      console.error(error);

      setResult({
        num_nodes: 0,
        num_edges: 0,
        is_dag: false,
      });

      setOpen(true);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            padding: "12px 24px",
            borderRadius: "10px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            boxShadow: "0 4px 12px rgba(37,99,235,0.3)",
          }}
        >
          🔍 Analyze Pipeline
        </button>
      </div>

      <AnalysisModal
        isOpen={open}
        result={result}
        onClose={() => setOpen(false)}
      />
    </>
  );
};