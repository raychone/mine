import { NavLink as Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-24 flex flex-col gap-5">
      <h2 className="title text-4xl font-semibold">Login</h2>
      <form
        type="submit"
        className="mx-auto items-center flex flex-col gap-5 border-2 rounded-xl  px-10 py-5"
      >
        {/* <div className="name flex flex-col text-left">
          <label
            htmlFor="name"
            className="text-sm underline underline-offset-4"
          >
            Name*
          </label>
          <input
            className="px-2 py-1 border-b-2 focus:border-x-2 rounded-b-xl text-xl focus:outline-none bg-transparent"
            type="text"
            id="name"
            name="name"
            required
          />
        </div> */}
        <div className="email flex flex-col text-left">
          <label
            htmlFor="email"
            className="text-sm underline underline-offset-4"
          >
            Email*
          </label>
          <input
            className="px-2 py-1 border-b-2 focus:border-x-2 rounded-b-xl text-xl focus:outline-none bg-transparent"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="password flex flex-col text-left">
          <label
            htmlFor="password"
            className="text-sm underline underline-offset-4"
          >
            Password*
          </label>
          <input
            className="px-2 py-1 border-b-2 focus:border-x-2 rounded-b-xl text-xl focus:outline-none bg-transparent"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>

        <button className="font-semibold text-xl border-2 py-1 px-2 rounded-xl w-[55%]   hover:bg-white/20 hover:text-black/80">
          Login
        </button>
      </form>
      <p className="text-xl w-[300px] leading-9 mx-auto">
        If you don&apos;t have an account, signup
        <Link
          className=" ml-2 py-1 px-4 rounded-3xl bg-blue-400 text-white/80"
          to={"/signup"}
        >
          Here
        </Link>
      </p>
    </div>
  );
};

export default Login;
