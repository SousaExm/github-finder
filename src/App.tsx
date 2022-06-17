import Layout from "./components/layout";
import { Profile } from "./components/profile";
import { Repositories } from "./components/repositories";
import { ResetCSS } from "./global/resetCSS";
import GitHubProvider from "./provider/GitHubProvider";

const App = () => {
  return (
    <main>
      <ResetCSS/>
      <GitHubProvider>
        <Layout>
          <Profile/>
          <Repositories/>
        </Layout>
      </GitHubProvider>
    </main>
  );
}

export default App;
