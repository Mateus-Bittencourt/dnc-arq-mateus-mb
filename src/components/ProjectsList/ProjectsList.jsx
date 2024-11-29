import { useContext, useState, useEffect } from "react";

import "./ProjectsList.css";

//Assets
import LikedFillend from "../../assets/like-filled.svg";
import Like from "../../assets/like.svg";

//Components
import Button from "../Button/Button";

//Utils
import { getApiData } from "../../services/apiServices";

//Context
import { AppContext } from "../../contexts/AppContext";

function ProjectsList() {
  const appContext = useContext(AppContext);
  const [projects, setProjects] = useState();
  const [favProjects, setFavProject] = useState([]);

  const handleSavedProjects = (id) => {
    setFavProject((prevFavProjects) => {
      if (prevFavProjects.includes(id)) {
        const filterArray = prevFavProjects.filter(
          (projectId) => projectId !== id
        );
        sessionStorage.setItem("favProjects", JSON.stringify(filterArray));
        return prevFavProjects.filter((projectId) => projectId !== id);
      } else {
        sessionStorage.setItem(
          "favProjects",
          JSON.stringify([...prevFavProjects, id])
        );
        return [...prevFavProjects, id];
      }
    });
  };

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

  useEffect(() => {
    const savedFavProjects = JSON.parse(sessionStorage.getItem("favProjects"));
    if (savedFavProjects) setFavProject(savedFavProjects);
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
              <Button
                buttonStyle="unstyled"
                onClick={() => handleSavedProjects(project.id)}
              >
                <img
                  src={favProjects.includes(project.id) ? LikedFillend : Like}
                  height="20px"
                  alt=""
                />
              </Button>
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
