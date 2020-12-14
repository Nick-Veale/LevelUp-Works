import Axios from "axios";

export const fetchAllProjects = async () => {
  const allProjects = await Axios.get("http://localhost:3030/fetchallprojects");
  return allProjects;
};

export const fetchProject = async (ProjectId) => {
  const project = await Axios.post("http://localhost:3030/fetchproject", {
    ProjectID: ProjectId,
  });

  return project.data[0];
};
