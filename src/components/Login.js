import { useState } from "react";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);

  const handleLogin = () => {
    setisLogin(!isLogin);
  };
  return (
    <div className="min-h-lvh flex flex-col w-3/12 m-auto my-4 text-center">
      <h1 className="my-4">{isLogin ? "Login" : "Sign up"}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("implementation is in progress");
        }}
        className="flex flex-col my-4"
      >
        {!isLogin && (
          <input
            type="text"
            placeholder="username"
            className="mx-4 my-2 px-4 py-4 border-2 border-black rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="mx-4 my-2 px-4 py-4 border-2 border-black rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          className="mx-4 my-2 px-4 py-4 border-2 border-black rounded-md"
        />
        <button
          type="submit"
          className="w-3/12 m-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-md my-2"
        >
          Submit
        </button>
      </form>
      <p className="">
        <span>Not Registered Yet!</span>
        <span onClick={handleLogin} className="cursor-pointer">
          {isLogin ? "Signup" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default Login;
