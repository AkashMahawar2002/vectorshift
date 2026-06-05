export const AnalysisModal = ({
  isOpen,
  onClose,
  result,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          width: "350px",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h2>📊 Pipeline Analysis</h2>

        <p>📦 Nodes: {result?.num_nodes}</p>

        <p>🔗 Edges: {result?.num_edges}</p>

        <p>
          {result?.is_dag
            ? "✅ Valid DAG"
            : "❌ Cycle Detected"}
        </p>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};