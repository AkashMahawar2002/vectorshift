import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header
      <div
        style={{
          textAlign: "center",
          padding: "30px 20px",
          background: "white",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#0f172a",
            fontSize: "32px",
          }}
        >
          🚀 VectorShift Pipeline Builder
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#64748b",
            fontSize: "16px",
          }}
        >
          Build, connect and analyze workflow pipelines visually
        </p>
      </div> */}

      {/* Toolbar */}
      <div
        style={{
          background: "#ffffff",
          padding: "15px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <PipelineToolbar />
      </div>

      {/* Flow Canvas */}
      <div
        style={{
          padding: "20px",
        }}
      >
        <PipelineUI />
      </div>

      {/* Submit */}
      <div
        style={{
          paddingBottom: "30px",
        }}
      >
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;