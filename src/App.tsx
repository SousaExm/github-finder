import { ResetCSS } from "./global/resetCSS";
import { SearchUsersPage } from "./pages/SearchUsersPage";
import GitHubProvider from "./provider/GitHubProvider";

const App = () => {
  return (
    <main>
      <ResetCSS/>
      <GitHubProvider>
        <SearchUsersPage/>
      </GitHubProvider>
    </main>
  );
}

export default App;
