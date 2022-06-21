import * as S from './styled'

type RepositoryItemPropsType = {
    repositoryName: string,
    linkToCode: string,
    id: string,
}

const RepositoryItem = ({repositoryName, linkToCode}:RepositoryItemPropsType) => {
    return(
        <S.Wrapper>
            <h2>{repositoryName}</h2>
            <a 
            href={"https://github.com/" + linkToCode} 
            target="_blank"
            >
                Ver o código
            </a>
        </S.Wrapper>
    )
}

export default RepositoryItem