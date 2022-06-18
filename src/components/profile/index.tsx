import { useGitHub } from '../../hooks/useGitHub'
import * as S from './styled'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Location } from '@styled-icons/fluentui-system-filled/Location'
import { Building } from '@styled-icons/bootstrap/Building'
import { Blogger } from '@styled-icons/boxicons-logos/Blogger'

export const Profile = () => {

    const {gitHubState:{user}} = useGitHub()

    return (
        <S.Wrapper>
            <S.WrapperImg src={user.avatar} alt="Avatar do usuário"/>
            <S.WrapperAllInfoUser>
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.login}</p>
                    
                    {user.company !== null && (
                        <S.IconWrapper><Building/> {user.company}</S.IconWrapper>        
                    )}
                    {user.location !== null && (
                        <S.IconWrapper><Location/> {user.location}</S.IconWrapper>
                    )}
                    {user.blog !== "" && (
                        <S.IconWrapper><Blogger/> <a href={user.blog} target="_blanck" rel="noreferrer">Clique aqui e conheça o Blog do {user.name}!</a></S.IconWrapper>
                    )}

                    <S.IconWrapper><Github/> <a href={user.htmlUrl} target="_blanck" rel="noreferrer">Clique aqui para ver o perfil no GitHub!</a></S.IconWrapper>

                </div>
                
                <S.WrapperStatusCount>
                   
                    <p>Followers <span>{user.followers}</span></p>
                    <S.DotIcon/>
                    <p>Following <span>{user.following}</span></p>
                    <S.DotIcon/>
                    <p>Gists <span>{user.publicGists}</span></p>
                    <S.DotIcon/>
                    <p>Repositories <span>{user.publicRepos}</span></p>
        
                </S.WrapperStatusCount>
            </S.WrapperAllInfoUser>
        </S.Wrapper>
    )
}