# VectorShift Pipeline Builder

A visual workflow builder developed as part of the VectorShift Frontend Technical Assessment. The application allows users to create pipelines using drag-and-drop nodes, connect them visually, analyze workflow structures, and validate whether the pipeline forms a Directed Acyclic Graph (DAG).

## Features

### Node Abstraction

* Created a reusable `BaseNode` component to eliminate duplicated code across nodes.
* Centralized node layout, styling, and handle rendering.
* Simplified creation of new node types.

### Custom Nodes

Implemented the following custom nodes to demonstrate the flexibility of the abstraction:

* 🌐 API Node
* 🗄️ Database Node
* 📧 Email Node
* 🔍 Filter Node
* ⏱️ Delay Node

### Enhanced Existing Nodes

* 📥 Input Node
* 🤖 LLM Node
* 📤 Output Node
* 📝 Text Template Node

### Text Node Logic

Implemented the following functionality for the Text Node:

* Dynamic width adjustment based on content length.
* Dynamic height adjustment based on content size.
* Automatic detection of variables using double curly braces syntax.

Example:

```text
Hello {{name}}

Your email is {{email}}
```

Automatically generates input handles for:

* name
* email

### Pipeline Analysis

Integrated the frontend with the FastAPI backend.

When the user clicks **Analyze Pipeline**:

* Nodes and edges are sent to the backend.
* Backend calculates:

  * Total number of nodes
  * Total number of edges
  * Whether the pipeline is a DAG
* Results are displayed in a user-friendly analysis modal.

## Tech Stack

### Frontend

* React
* React Flow
* Zustand

### Backend

* FastAPI
* Python

## Project Structure

```text
frontend/
├── src/
│   ├── nodes/
│   │   ├── BaseNode.js
│   │   ├── inputNode.js
│   │   ├── outputNode.js
│   │   ├── llmNode.js
│   │   ├── textNode.js
│   │   ├── apiNode.js
│   │   ├── databaseNode.js
│   │   ├── emailNode.js
│   │   ├── filterNode.js
│   │   └── delayNode.js
│   ├── toolbar.js
│   ├── ui.js
│   ├── submit.js
│   └── App.js

backend/
└── main.py
```

## Running the Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will run at:

```text
http://localhost:3000
```

## Running the Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

## API Endpoint

### Analyze Pipeline

```http
POST /pipelines/parse
```

Request:

```json
{
  "nodes": [...],
  "edges": [...]
}
```

Response:

```json
{
  "num_nodes": 4,
  "num_edges": 2,
  "is_dag": true
}
```

## DAG Validation

The backend uses graph traversal logic to determine whether the submitted pipeline forms a Directed Acyclic Graph (DAG).

A valid pipeline:

```text
Input → Text → Output
```

Produces:

```json
{
  "is_dag": true
}
```

A cyclic pipeline:

```text
A → B → C → A
```

Produces:

```json
{
  "is_dag": false
}
```

## Assessment Deliverables Completed

* ✅ Node Abstraction
* ✅ Five Custom Nodes
* ✅ Unified Styling
* ✅ Dynamic Text Node Resizing
* ✅ Dynamic Variable Handles
* ✅ Backend Integration
* ✅ Node and Edge Analysis
* ✅ DAG Validation
* ✅ Pipeline Analysis Modal

## Author

Akash Mahawar
