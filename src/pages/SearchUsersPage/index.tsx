import { Header } from "../../components/header";
import { Profile } from "../../components/profile";
import { Repositories } from "../../components/repositories";
import { useGitHub } from "../../hooks/useGitHub";

export const SearchUsersPage = () => {
    const {gitHubState:{loading}} = useGitHub()
    
    return (
        <>
            <Header/>
            {!loading? (
                <>
                    <Profile/>
                    <Repositories/>
                </>
            ) : ("LOADING")}
        </>
    )
}