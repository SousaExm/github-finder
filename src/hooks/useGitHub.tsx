import { useContext } from 'react'
import { GitHubContext } from '../provider/GitHubProvider'

export const useGitHub = () => {
    const gitHubState = useContext(GitHubContext)
    return  gitHubState 
}