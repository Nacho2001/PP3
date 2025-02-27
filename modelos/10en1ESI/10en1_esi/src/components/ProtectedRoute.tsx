/* ProtectedRoute servira para imponerle limites al usuario anonimo.
   De esta forma evitamos que el usuario anonimo que no esta logueado
   tenga acceso a una pagina a la cual nosotros no queremos que se meta */
import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useHistory } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    //Compruebo si el usuario existe (si existe, lo dejamos navegar en otras paginas), si no redirecciono al login
    if (!user) {
      history.push("/login");
    }
  }, [user, history]);

  if (loading) return <h1>loading</h1>;

  return <>{children}</>;
};

export default ProtectedRoute;
