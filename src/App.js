import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/topbar";
import CreateProjectPage from "./pages/CreateProject";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
    <Topbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/projects/:id" element={<ProjectsPage/>} />
        <Route path="/create-project" element={<CreateProjectPage/>} />
        <Route path="*" element="808 Page not found"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 