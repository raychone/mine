import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>SignUp</Link>
      </nav>
    </div>
  );
};

export default Navbar;
