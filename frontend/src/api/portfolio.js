import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

async function get(endpoint) {
  const { data } = await api.get(`${endpoint}/`);
  return data;
}

export const fetchPersonalInfo   = () => get("personal-info");
export const fetchTech           = () => get("tech");
export const fetchProjects       = () => get("project");
export const fetchCertifications = () => get("certification");
export const fetchExperience     = () => get("experience");
export const fetchTestimonials   = () => get("testimonials");

