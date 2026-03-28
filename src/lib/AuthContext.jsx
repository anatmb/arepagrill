import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Definimos 'loading' aquí para que no dé error
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(false); // <--- ESTA LÍNEA ES CLAVE

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);