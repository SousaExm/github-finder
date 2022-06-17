import { createContext, ReactNode, useState } from "react";

type GitHubProviderPropsType = {
    children: ReactNode
}

type GitHubStateType = {
    user: {
        login:string | undefined,
        name:string | undefined,
        avatar: string | undefined,
        publicUrl: string | undefined,
        blog: string | undefined,
        company: string | undefined,
        location: string | undefined,
        followers: number| undefined,
        following: number | undefined,
        publicGists: number | undefined,
        publicRepos: number | undefined,
    },
    repositories: [],
    starred: [],
}

type GitHubContextType = GitHubStateType

export const GitHubContext = createContext({} as GitHubContextType);

const GitHubProvider = ({children}:GitHubProviderPropsType) => {
    const [ gitHubState, setGitHubState ] = useState<GitHubStateType>({
            user: {
                login:undefined,
                name:undefined,
                avatar:undefined,
                publicUrl:undefined,
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

    return (
        <GitHubContext.Provider
        value={gitHubState}
        >
            {children}
        </GitHubContext.Provider>
        )    
}

export default GitHubProvider;