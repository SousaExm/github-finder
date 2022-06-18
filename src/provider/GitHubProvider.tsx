import { createContext, ReactNode, useCallback, useState } from "react";
import api from "../services/api";

type GitHubProviderPropsType = {
    children: ReactNode
}

type GitHubStateType = {
    user: {
        login:string | undefined,
        name:string | undefined,
        avatar: string | undefined,
        htmlUrl: string | undefined,
        blog: string | undefined,
        company: string | undefined,
        location: string | undefined,
        followers: number| undefined,
        following: number | undefined,
        publicGists: number | undefined,
        publicRepos: number | undefined,
    },
    repositories?: [],
    starred?: [],
}

type SearchStatusType = {
    firstSearch: boolean,
    notFound: boolean,
    loading: boolean
}

type GitHubContextType = {
    searchStatus: SearchStatusType,
    gitHubState:GitHubStateType,
    getUser: (username:string) => void
}

const defaultUser = {
    
        login:undefined,
        name:undefined,
        avatar:undefined,
        htmlUrl:undefined,
        blog:undefined,
        company:undefined,
        location:undefined,
        followers:undefined,
        following:undefined,
        publicGists:undefined,
        publicRepos:undefined,
}

export const GitHubContext = createContext({} as GitHubContextType);

const GitHubProvider = ({children}:GitHubProviderPropsType) => {

    const [ searchStatus, setSearchStatus ] = useState<SearchStatusType>({
            firstSearch: true,
            notFound: false,
            loading: false
        }
    )
    const [ gitHubState, setGitHubState ] = useState<GitHubStateType>({
        user: defaultUser,
        repositories: [],
        starred:[]
    }
    )

    const getUser = (username:string) => {
        setSearchStatus(prevState => ({...prevState, loading: true}))
        
        api.get('users/' + username)
        .catch(res => {
            return res 
        })
        .then((res) => {
            if(res.request.status === 200){
                console.log("Penetrei")
                const data = res.data
                setSearchStatus(prevState => ({...prevState, notFound: false}))
                setGitHubState(prevState => ({...prevState,
                    user:{
                        login:data.login,
                        name:data.name,
                        avatar:data.avatar_url,
                        htmlUrl:data.html_url,
                        blog:data.blog,
                        company:data.company,
                        location:data.location,
                        followers:data.followers,
                        following:data.following,
                        publicGists:data.public_gists,
                        publicRepos:data.public_repos, 
                    }
                }))
            }else{
                setSearchStatus(prevState => ({...prevState, notFound: true}))
                setGitHubState(prevState => ({...prevState, user: defaultUser}))
            } 
        })
        .finally(() => setSearchStatus(prevState => ({...prevState,
                firstSearch: false, 
                loading: false,
            }
        ))
        )
    }

    const contextValue = {
        searchStatus,
        gitHubState,
        getUser: useCallback((username:string) => {getUser(username)},[])
    }

    return (
        <GitHubContext.Provider
        value={contextValue}
        >
            {children}
        </GitHubContext.Provider>
        )    
}

export default GitHubProvider;