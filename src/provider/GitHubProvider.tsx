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
    repositories: [{
        id: string | undefined, 
        name: string | undefined,
        full_name: string | undefined,
        owner: {
            html_url: string | undefined
        }
    }],
    starred: [{
        id: string | undefined, 
        name: string | undefined,
        full_name: string | undefined,
        owner: {
            html_url: string | undefined
        }
    }]
}

type SearchStatusType = {
    firstSearch: boolean,
    notFound: boolean,
    loading: boolean,
    loadingRepositories:boolean,    
    loadingStarreds: boolean
}

type GitHubContextType = {
    searchStatus: SearchStatusType,
    gitHubState:GitHubStateType,
    getUser: (username:string) => void,
    getStarred: (username:string) => void
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
            loading: false,
            loadingRepositories:false,
            loadingStarreds: false
    })

    const [ gitHubState, setGitHubState ] = useState<GitHubStateType>({
        user: defaultUser,
        repositories: [{
            id: undefined, 
            name: undefined,
            full_name: undefined,
            owner: {
                html_url: undefined
            }
        }],
        starred:[{
            id: undefined, 
            name: undefined,
            full_name: undefined,
            owner: {
                html_url: undefined
            }
        }]
    })

    const getRepositories = (username:string) => {
        setSearchStatus(prevState => ({...prevState, loadingRepositories: true}))
        api.get('users/'+ username + '/repos')
        .then(  res => {
            console.log(res.data)
            setGitHubState(prevState => ({...prevState,
                repositories: res.data 
            }))
        })
        .finally(() => {
            setSearchStatus(prevState => ({...prevState, loadingRepositories: false}))
        })
    }

    const getStarred = (username:string) => {
        setSearchStatus(prevState => ({...prevState, loadingStarred: true}))
        api.get('users/'+ username + '/starred')
        .then(  res => {
            console.log(res.data)
            setGitHubState(prevState => ({...prevState,
                starred: res.data 
            }))
        })
        .finally(() => {
            setSearchStatus(prevState => ({...prevState, loadingLoadingStarred: false}))
        })
    }

    const getUser = (username:string) => {
        setSearchStatus(prevState => ({...prevState, firstSearch: false, loading: true}))
        api.get('users/' + username)
        .catch(res => {
            return res 
        })
        .then((res) => {
            if(res.request.status === 200){
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
                getRepositories(username)
            }else{
                setSearchStatus(prevState => ({...prevState, notFound: true}))
                setGitHubState(prevState => ({...prevState, user: defaultUser}))
            }
        })
        .finally(() => {
            setSearchStatus(prevState => ({...prevState,
                loading: false,
            }))
        })
    }

    const contextValue = {
        searchStatus,
        gitHubState,
        getUser: useCallback((username:string,) => {getUser(username)},[]),
        getStarred: useCallback((username:string,) => {getStarred(username)},[])
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