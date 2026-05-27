import { useQuery } from "@tanstack/react-query";
import {
  fetchPersonalInfo, fetchTech, fetchProjects,
  fetchCertifications, fetchExperience, fetchTestimonials,
} from "../api/portfolio";

const OPTS = { staleTime: 1000 * 60 * 5 };

export const usePersonalInfo   = () => useQuery({ queryKey: ["personalInfo"],   queryFn: fetchPersonalInfo,   ...OPTS });
export const useTech           = () => useQuery({ queryKey: ["tech"],           queryFn: fetchTech,           ...OPTS });
export const useProjects       = () => useQuery({ queryKey: ["projects"],       queryFn: fetchProjects,       ...OPTS });
export const useCertifications = () => useQuery({ queryKey: ["certifications"], queryFn: fetchCertifications, ...OPTS });
export const useExperience     = () => useQuery({ queryKey: ["experience"],     queryFn: fetchExperience,     ...OPTS });
export const useTestimonials   = () => useQuery({ queryKey: ["testimonials"],   queryFn: fetchTestimonials,   ...OPTS });
