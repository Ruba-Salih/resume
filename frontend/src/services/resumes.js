import api from "./api";

export const getResumes = () => api.get("/resumes");
export const createResume = (data) => api.post("/resumes", data);
export const updateResume = (id, data) =>
  api.put(`/resumes/${id}`, data);
export const deleteResume = (id) =>
  api.delete(`/resumes/${id}`);
