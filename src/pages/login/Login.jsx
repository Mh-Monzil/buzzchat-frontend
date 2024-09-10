const Login = () => {
  return (
    <div className="flex items-center justify-center min-w-96 mx-auto">
      <div className="w-full h-full p-6 rounded-lg shadow-md border-2">
        <h1 className="text-3xl font-semibold text-center text-gray-300 pb-5">
          Login
          <span className="text-teal-400"> BuzzChat</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="font-semibold">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 pb-1"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 pb-1"
            />
          </div>
          <div className="mt-6">
            <button className="btn-block border rounded-md pt-1.5 pb-2 font-bold hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              Login
            </button>
          </div>
          <p className="mt-2">
            {"Don't"} have an account?{" "}
            <a
              href="#"
              className="text-sm hover:underline text-teal-500 inline-block"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

