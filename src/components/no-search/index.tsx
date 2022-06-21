import { useGitHub } from '../../hooks/useGitHub'
import * as S from './styled'

export const NoSearch = () => {
    
    const {searchStatus:{ firstSearch}} = useGitHub()

    return (
        <S.Wrapper>
                <S.Error/>               
                {firstSearch === false ? (
                    <>
                            <p>Usuário não encontrado</p>  
                            <p>tente pesqusiar outro nome de usuário!</p>
                    </>
                ) : (
                    <>
                            <p>Para fazer uma pessquisa no GitHub</p>  
                            <p>digite um nome de usuário na barra de pesquisa acima!</p>
                    </>
                )}
                         
        </S.Wrapper>  
        
    )
}