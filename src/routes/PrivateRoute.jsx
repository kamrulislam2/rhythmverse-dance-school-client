import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const springs = useSpring({
    from: { background: "#ff6d6d", y: -40, x: 0 },
    to: async (next, cancel) => {
      await next({ x: 80, background: "#fff59a" });
      await next({ y: 40, background: "#88DFAB" });
      await next({ x: 0, background: "#569AFF" });
      await next({ y: -40, background: "#ff6d6d" });
    },
    loop: true,
  });

  if (loading) {
    return (
      <div className="flex items-center h-[100vh] justify-center">
        <animated.div
          style={{
            width: 40,
            height: 40,
            borderRadius: 4,
            ...springs,
          }}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
