import { Header } from "../../components/header";
import { NoSearch } from "../../components/no-search";
import { Profile } from "../../components/profile";
import { Repositories } from "../../components/repositories";
import { useGitHub } from "../../hooks/useGitHub";

export const SearchUsersPage = () => {
    const {searchStatus:{loading , notFound, firstSearch}} = useGitHub()
    
    return (
        <>
            <Header/>
            {firstSearch === true || notFound ? (
               <NoSearch/> 
            ) : loading? (
                <div>Loading</div>
            ) : (
                <>
                <Profile/>
                <Repositories/>
                </>
            )}
        </>
    )
}