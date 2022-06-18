import Header from "./components/header";
import { Profile } from "./components/profile";
import { Repositories } from "./components/repositories";
import { ResetCSS } from "./global/resetCSS";
import GitHubProvider from "./provider/GitHubProvider";

const App = () => {
  return (
    <main>
      <ResetCSS/>
      <GitHubProvider>
        <Header/>
        <Profile/>
        <Repositories/>
      </GitHubProvider>
    </main>
  );
}

export default App;
