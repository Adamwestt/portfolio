import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OverviewPage from "./Pages/OverviewPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ExperiencePage from "./Pages/ExperiencePage";
import EducationPage from "./Pages/EducationPage";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";
function App() {
  const [closed, setClosed] = useState(false);
  const handleFilesDisplay = () => {
    setClosed((prevClosed) => !prevClosed);
  };
  return (
    <Router>
      {/* <Topbar closed={closed} /> */}
      <Navbar closedHandle={handleFilesDisplay} closed={closed} />
      <Routes className="body">
        <Route exact path="/" element={<OverviewPage closed={closed} />} />
        <Route exact path="/skills" element={<SkillsPage closed={closed} />} />
        <Route exact path="/experience" element={<ExperiencePage closed={closed} />} />
        <Route exact path="/education" element={<EducationPage closed={closed} />} />
        <Route exact path="/projects" element={<ProjectsPage closed={closed} />} />
      </Routes>
    </Router>
  );
}

export default App;
