import Details from "./components/Details";
import Footer from "./components/Footer";
import RepoList from "./components/RepoList";
import Search from "./components/Search";
import { github } from "./components/Util";
import { useEffect,useState } from "react";



function App() {

  const [details, setDetails] = useState({});
  const [followers, setFollowers] = useState([]);
  const [repolist, setRepolist] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect( _ => {
    ( async _ => {
      const response = await github.get("/aayusharyan");
      setDetails(response.data);
      console.log(response.data);
    })();
  }
  ,[]);

  useEffect(_ => {
    (async _ => {
      const followers = await github.get("/aayusharyan/followers");
      setFollowers(followers.data);
    })();
  },[]);

  useEffect(_ => {
    (async _ => {
      const following = await github.get("/aayusharyan/following");
      setFollowing(following.data);
    })();
  },[]);

  useEffect( _ => {
    (async _ => {
      const repolist = await github.get("/aayusharyan/repos");
      setRepolist(repolist.data);
    })();
  },[]);

  return (
    <main>
      <h2>GitFind</h2>
      < Search />
      < Details details={details} followers={followers} following={following} repolist={repolist}/>
      < RepoList repolist={repolist} />
      < Footer />
    </main>
  );
}

export default App;
