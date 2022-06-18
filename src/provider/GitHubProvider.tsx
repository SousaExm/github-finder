import { createContext, ReactNode, useCallback, useState } from "react";
import api from "../services/api";

type GitHubProviderPropsType = {
    children: ReactNode
}

type GitHubStateType = {
    loading?: boolean,
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

type GitHubContextType = {
    gitHubState:GitHubStateType,
    getUser: (username:string) => void
}

export const GitHubContext = createContext({} as GitHubContextType);

const GitHubProvider = ({children}:GitHubProviderPropsType) => {
    const [ gitHubState, setGitHubState ] = useState<GitHubStateType>({
            loading: false,
            user: {
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
            },
            repositories: [],
            starred:[]
        }
    )

    const getUser = (username:string) => {
        api.get('users/' + username)
            .then( ({data}) => {
                console.log(data)
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
            }
        )
    }

    const contextValue = {
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