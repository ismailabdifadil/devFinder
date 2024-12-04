import sun from "../assets/002-sun.svg";

import moon from "../assets/moon.svg";
import { useTheme } from "../Context/ThemContext";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex justify-between py-4 my-2">
      <h2 className="h1 dark:text-white text-primary">DevFinder</h2>
      <div className="flex justify-center items-center space-x-3">
        <h4 className="h4 dark:text-white text-primary-400">
          {theme ? "DARK" : "LIGHT"}
        </h4>
        <button onClick={() => setTheme((prev) => !prev)}>
          {theme ? <img src={moon} alt="" /> : <img src={sun} alt="" />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
