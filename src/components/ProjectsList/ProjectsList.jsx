import { useContext, useState, useEffect } from "react";

import "./ProjectsList.css";

//Assets
import LikedFillend from "../../assets/like-filled.svg";
import Like from "../../assets/like.svg";

//Utils
import { getApiData } from "../../services/apiServices";

//Context
import { AppContext } from "../../contexts/AppContext";

function ProjectsList() {
  const appContext = useContext(AppContext);
  const [projects, setProjects] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData("projects");
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
      </div>
      <div className="projects-grid">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="project-card d-flex jc-center al-center fd-column"
            >
              <div
                className="thumb tertiary-background"
                style={{ backgroundImage: `url(${project.thumb})` }}
              ></div>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <img src={Like} height="20px" alt="" />
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}

export default ProjectsList;
