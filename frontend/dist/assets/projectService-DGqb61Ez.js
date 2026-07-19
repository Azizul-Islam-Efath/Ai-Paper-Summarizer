import { e } from "./index-DZyWQ_ka.js";
const c = {
  createProject: (t) => e.post("/projects", t),
  getProjects: (t) => e.get("/projects", { params: t }),
  getProject: (t) => e.get(`/projects/${t}`),
  updateProject: (t, o) => e.put(`/projects/${t}`, o),
  deleteProject: (t) => e.delete(`/projects/${t}`),
  getStats: (t) => e.get(`/projects/${t}/stats`),
};
export { c as p };
