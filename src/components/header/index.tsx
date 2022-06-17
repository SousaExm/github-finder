import { ChangeEvent, useState } from 'react'
import { useGitHub } from '../../hooks/useGitHub'
import * as S from './styled'

const Header = () => {

    const { getUser } = useGitHub()
    const [usernameForSearch, setUsernameForSearch] = useState<string>() 
    
    const handleOnSubmit = () => {
        usernameForSearch && getUser(usernameForSearch)
    }

    const handleInputValue = (event:ChangeEvent<HTMLInputElement>) => {
        setUsernameForSearch(event.target.value)
    }

    return (
        <S.Wrapper>
            <input  
            onChange={(e) => handleInputValue(e)}
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