import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
