import { ReactNode } from 'react'
import { useGitHub } from '../../hooks/useGitHub'
import * as S from './styled'

export const NoSearch = () => {
    
    //const {searchStatus:{notFound, firstSearch}} = useGitHub()

    return (
        <S.Wrapper>Primeira pesquisa</S.Wrapper>  
        
    )
}