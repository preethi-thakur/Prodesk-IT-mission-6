import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const { isLoggedIn, login } = useContext(AuthContext);

  const navigate = useNavigate();


  useEffect(() => {

    if (isLoggedIn) {
      navigate("/");
    }

  }, [isLoggedIn]);

  const handleLogin = () => {
    login();
    navigate("/checkout");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-amber-100">

     
        <button
          onClick={handleLogin}
          className="bg-rose-500 text-white px-10 py-3 rounded-2xl"
        >
          Login as Guest
        </button>

    

    </div>
  );
}
