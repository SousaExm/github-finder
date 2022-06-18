import { useState } from 'react'
import { useGitHub } from '../../hooks/useGitHub'
import * as S from './styled'

export const Header = () => {

    const { getUser } = useGitHub()
    const [usernameForSearch, setUsernameForSearch] = useState<string>() 
    
    const handleOnSubmit = () => {
        usernameForSearch && getUser(usernameForSearch)
    }

    return (
        <S.Wrapper>
            <h1>GitHub Finder</h1>
            <div>
                <input
                onChange={(e) => setUsernameForSearch(e.target.value)}
                value={usernameForSearch}
                type="text"
                placeholder="Insira um nome de usuário do GitHub"
                />
                <button 
                onClick={handleOnSubmit}
                >Buscar</button>
            </div>
        </S.Wrapper>
    )
}

