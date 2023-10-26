import { ENDPOINTS } from "@/constant/endpoint";
import { API } from "@/utils";

export const getListCourses = () => ({
    queryKey: [ENDPOINTS.COURSES],
    queryFn: () => API.get(ENDPOINTS.COURSES),
  });
  