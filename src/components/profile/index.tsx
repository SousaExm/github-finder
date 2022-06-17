import { useGitHub } from '../../hooks/useGitHub'
import * as S from './styled'

export const Profile = () => {

    const { user } = useGitHub()

    return (
        <S.Wrapper>
            <S.WrapperImg src={user.avatar} alt="Avatar do usuário"/>
            <S.WrapperInfoUser>
                <div>
                    <h1>{user.name}</h1>
                    <S.WrapperUserName>
                        <h3>Username:</h3>
                        <a href="https://github.com/SousaExm" target="_blank" rel="noreferrer">SousaExm</a>
                    </S.WrapperUserName>
                </div>
                
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}