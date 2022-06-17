import { useGitHub } from '../../hooks/useGitHub'
import * as S from './styled'

export const Profile = () => {

    const {gitHubState:{user}} = useGitHub()

    return (
        <S.Wrapper>
            <S.WrapperImg src={user.avatar} alt="Avatar do usuário"/>
            <S.WrapperInfoUser>
                <div>
                    <h1>{user.name}</h1>
                    <S.WrapperUserName>
                        <h3>Username:</h3>
                        <a href={user.htmlUrl} target="_blank" rel="noreferrer">{user.login}</a>
                    </S.WrapperUserName>
                </div>
                
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{user.followers}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{user.publicGists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{user.publicRepos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}