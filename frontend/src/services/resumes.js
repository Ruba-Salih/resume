import api from "./api";

export const getResumes = () => api.get("/resumes");
export const getResumeById = async (id) => {
  const res = await api.get(`/resumes/${id}`);
  return res.data;
};
export const createResume = (data) => api.post("/resumes", data);
export const updateResume = (id, data) =>
  api.put(`/resumes/${id}`, data);
export const deleteResume = (id) =>
  api.delete(`/resumes/${id}`);
export const getRecentResumes = async (limit = 4) => {
  const res = await api.get("/resumes/recent", { params: { limit } });
  return res.data;
};
