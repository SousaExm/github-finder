import RepositoryItem from '../repository-item'
import * as S from './styled'

export const Repositories = () => {
    return (
    <S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
    >
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
            <RepositoryItem
            repositoryName="discover-rocketQ"
            linkToCode="SousaExm/discover-rocketQ"
            />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
            <RepositoryItem
            repositoryName="discover-rocketQ"
            linkToCode="SousaExm/discover-rocketQ"
            />
        </S.WrapperTabPanel>
    </S.WrapperTabs>
    )
}