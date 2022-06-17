import * as S from './styled'

export const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImg src="https://avatars.githubusercontent.com/u/94645489?v=4" alt="Avatar do usuário"/>
            <S.WrapperInfoUser>
                <div>
                    <h1>Renato Sousa</h1>
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