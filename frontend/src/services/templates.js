import api from "./api";

export async function getTemplates() {
  const res = await api.get("/templates");
  return res.data;
}
