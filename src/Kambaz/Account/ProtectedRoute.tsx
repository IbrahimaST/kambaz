import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  requireFaculty = false,
}: {
  children: any;
  requireFaculty?: boolean;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  if (requireFaculty && currentUser.role !== "FACULTY") {
    return children;
  }

  return children;
}

export function useCanEdit() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return currentUser && currentUser.role === "FACULTY";
}
