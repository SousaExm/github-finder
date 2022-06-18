import { ChangeEvent, useState } from 'react'
import { useGitHub } from '../../hooks/useGitHub'
import * as S from './styled'

const Header = () => {

    const { getUser } = useGitHub()
    const [usernameForSearch, setUsernameForSearch] = useState<string>() 
    
    const handleOnSubmit = () => {
        usernameForSearch && getUser(usernameForSearch)
    }

    return (
        <S.Wrapper>
            <input  
            onChange={(e) => setUsernameForSearch(e.target.value)}
            value={usernameForSearch}
            type="text"
            placeholder="Digite um nome para pesquisa"
            />
            <button 
            onClick={handleOnSubmit}
            >Buscar</button>
        </S.Wrapper>
    )
}

export default Header