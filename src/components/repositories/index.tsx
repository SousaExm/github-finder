import { useEffect } from 'react'
import { useGitHub } from '../../hooks/useGitHub'
import RepositoryItem from '../repository-item'
import * as S from './styled'

export const Repositories = () => {
    
    const { 
        gitHubState:{repositories, user, starred}, 
        searchStatus:{loadingRepositories, loadingStarreds},
        getStarred 
    } = useGitHub()

    return (
    <S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
    >
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab
            onClick={() => getStarred(user.login? user.login : "")}
            >
            Starred</S.WrapperTab>
        </S.WrapperTabList>
            <S.WrapperTabPanel>
            {loadingRepositories? (
                <div>Carregando Repositórios</div>
            ): (
                <>
                {repositories.map((repo) => (
                    <RepositoryItem
                    id={repo.id? repo.id : ""}
                    repositoryName={repo.name ? repo.name : ""}
                    linkToCode={repo.full_name ? repo.full_name : ""}
                    />
                ))}
                </>
            )}
            </S.WrapperTabPanel>
                
            <S.WrapperTabPanel>
            {loadingStarreds? (
                <div>Carregando Starred</div>
            ): (
                <>
                {starred.map((repo) => (
                    <RepositoryItem
                    id={repo.id? repo.id : ""}
                    repositoryName={repo.name ? repo.name : ""}
                    linkToCode={repo.full_name ? repo.full_name : ""}
                    />
                ))}
                </>
            )}
            </S.WrapperTabPanel>
    </S.WrapperTabs>
    )
}