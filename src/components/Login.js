import { useRef, useState } from "react";
import { checkLoginValues, checkSignupValues } from "../utils/Validations";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate=useNavigate()
  const password = useRef(null);
  const email = useRef(null);
  const confirmPassword = useRef(null);

  const clearFields = () => {
    email.current.value = null;
    password.current.value = null;
    if (!isLogin) confirmPassword.current.value = null;
  };
  const handleLogin = () => {
    setisLogin(!isLogin);
    clearFields();
    setErrorMessage(null);
  };

  const handlesubmit = () => {
    if (email.current.value === "" || password.current.value === "")
      setErrorMessage("All Fields Madatory");
    else {
      const message = isLogin
        ? checkLoginValues(email.current.value, password.current.value)
        : checkSignupValues(
            email.current.value,
            password.current.value,
            confirmPassword.current.value
          );

      setErrorMessage(message);
      if (message) return;
      else {
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-lvh flex flex-col xl:w-6/12 m-auto my-4 text-center">
      <h1 className="my-4 text-xl font-bold">
        {isLogin ? "Log in" : "Sign up"}
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col my-4 md:w-6/12 m-auto"
      >
        <input
          type="text"
          placeholder="email"
          className="mx-4 my-2 px-4 py-4 border-2 border-black rounded-md"
          ref={email}
        />
        <input
          type="password"
          placeholder="password"
          className="mx-4 my-2 px-4 py-4 border-2 border-black rounded-md"
          ref={password}
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="confirm password"
            className="mx-4 my-2 px-4 py-4 border-2 border-black rounded-md"
            ref={confirmPassword}
          />
        )}
        <p className="my-2 mx-4 text-start text-red-500">{errorMessage}</p>
        <div className="flex justify-between items-center my-4">
          {" "}
          <p className="text-start mx-4">
            <span className="text-md font-base">
              {isLogin ? "Not Registered Yet!" : "Already Registered!"}
            </span>
            <span
              onClick={handleLogin}
              className="cursor-pointer mx-2 text-lg font-medium hover:text-blue-500"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
          <button
            className={`w-3/12 mr-4 xl:m-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-md my-2`}
            onClick={handlesubmit}
          >
            {isLogin ? "Log in" : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
