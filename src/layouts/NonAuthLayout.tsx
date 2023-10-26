import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "@/utils";
import { HomePageUrl } from "@/routes";

const NonAuthLayout = ({ children }: { children: ReactNode }) => {
  if (getToken()) {
    return <Navigate to={{ pathname: HomePageUrl }} />;
  }

  return <>{children}</>;
};

export default NonAuthLayout;
