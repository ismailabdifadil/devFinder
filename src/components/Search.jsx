import { useEffect, useState } from "react";
import searchDark from "../assets/search.svg";
import { useGithub } from "../Context/GithubContext";
const Search = () => {
  const { setUser, setLoading, setError, error } = useGithub();
  const [searchInput, setSearchInput] = useState("");
  const endPoint = import.meta.env.VITE_APP_GITHUB_URL;
  const handleSearch = async (e) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`https://api.github.com/users/${searchInput}`);

      if (res.status === 404) {
        setError("No result found.");
      } else {
        const data = await res.json();
        setUser(data);
        setLoading(false);
        setSearchInput("");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 rounded-[15px] dark:bg-primary-700 bg-white flex justify-between shadow-xl ">
      <div className="flex  items-center gap-2 flex-1">
        <img src={searchDark} alt="" />
        <input
          type="text"
          className="bg-transparent placeholder:text-primary-800 dark:placeholder:text-white h4 outline-none dark:text-white w-full relative"
          placeholder="Search GitHub username.."
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSearch();
            }
          }}
        />
        {error && (
          <p className="text-red-500 text-xs absolute right-32">{error}</p>
        )}
      </div>

      <button
        className="bg-blue-900 w-[84px] h-[46px] rounded-lg h3 text-white"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
