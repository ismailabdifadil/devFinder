import Header from "./components/Header";
import Search from "./components/Search";
import UserResult from "./components/UserResult";
import { useGithub } from "./Context/GithubContext";

function App() {
  const { user, loading } = useGithub();
  const isEmpty = Object.keys(user).length === 0;
  console.log(isEmpty);
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Search />
      {loading && <div className="spinner show"></div>}
      {Object.keys(user).length !== 0 && <UserResult />}
    </div>
  );
}

export default App;
